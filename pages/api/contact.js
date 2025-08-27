import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, token } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Optional: verify reCAPTCHA v3 if keys are provided
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (secret) {
    try {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token || "",
        }),
      });
      const verifyJson = await verifyRes.json();
      if (!verifyJson.success || (verifyJson.score !== undefined && verifyJson.score < 0.5)) {
        return res.status(400).json({ message: "reCAPTCHA validation failed" });
      }
    } catch (e) {
      console.error("reCAPTCHA error", e);
      return res.status(400).json({ message: "reCAPTCHA error" });
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify(); // ensure config is valid

    await transporter.sendMail({
      from: `"DMSMARTERS Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>New Inquiry via DMSMARTERS</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "").replace(/\\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Failed to send message." });
  }
}
