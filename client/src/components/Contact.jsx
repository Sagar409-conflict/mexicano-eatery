import { useState } from 'react';
import '../styles/Contact.css';

const Contact = ({ showToast }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        showToast('✅ Message sent! We\'ll get back to you soon.', 'success');
        setForm({ name: '', email: '', message: '' });
      } else {
        const msg = data.errors?.[0]?.msg || 'Something went wrong.';
        showToast(msg, 'error');
      }
    } catch {
      showToast('Could not connect to server. Please try later.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="contact-header reveal">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            We'd Love to <span className="highlight">Hear</span> From You
          </h2>
          <p className="section-subtitle">
            Have a question, special request, or want to plan an event? Drop us a message.
          </p>
        </div>
        <div className="contact-grid">
          <div className="glass-card contact-form-card reveal">
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input className="form-input" type="text" id="contact-name" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input className="form-input" type="email" id="contact-email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea className="form-textarea" id="contact-message" name="message" placeholder="Tell us what's on your mind..." rows="5" value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary" disabled={submitting} id="contact-submit">
                {submitting ? 'Sending...' : '📨 Send Message'}
              </button>
            </form>
          </div>
          <div className="contact-map reveal">
            <div className="contact-map-placeholder">
              <span className="contact-map-icon">📍</span>
              <div className="contact-map-address">420 Fiesta Boulevard</div>
              <div className="contact-map-detail">
                Downtown, Mexico City Vibes<br />
                Open Daily: 11 AM – 11:30 PM<br /><br />
                📞 (555) 123-FUEGO<br />
                ✉️ hola@elfuego.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
