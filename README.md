# DMSMARTERS – Agency Landing Page (Next.js + Tailwind + Nodemailer)

A modern, responsive landing page for an agency with services, portfolio, testimonials, and a CTA contact form integrated with Nodemailer. Optional reCAPTCHA v3 support.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## ✉️ Email Setup (.env.local)

Create `.env.local` in the project root and set:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=destination@example.com

# Optional reCAPTCHA v3 (recommended)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

If you use Gmail, generate an **App Password** under Google Account → Security.

## 📦 Tech
- Next.js 14 (pages router)
- Tailwind CSS 3
- Framer Motion for subtle animations
- Nodemailer for email delivery
- Lucide icons

## 🧩 Customize
- Edit copy and sections in `components/`
- Styles in `styles/globals.css`
- API route in `pages/api/contact.js`
