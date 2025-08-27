import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA v3 if site key provided
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (siteKey && !document.getElementById('recaptcha-script')) {
      const s = document.createElement('script');
      s.id = 'recaptcha-script';
      s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      document.head.appendChild(s);
    }
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');

    let token = '';
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (siteKey && window.grecaptcha) {
      token = await window.grecaptcha.execute(siteKey, { action: 'contact' });
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(`❌ ${data.message || 'Failed to send message.'}`);
      }
    } catch (err) {
      setStatus('❌ Network error. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
      <div className="container relative py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
        <p className="max-w-2xl mx-auto mb-12 opacity-90">Let’s collaborate to bring your vision to life with modern, scalable web solutions.</p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows="5"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
          <Button type="submit" disabled={submitting} className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
          {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
