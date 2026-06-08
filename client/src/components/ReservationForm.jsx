import { useState } from 'react';
import '../styles/ReservationForm.css';

const ReservationForm = ({ showToast }) => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, guests: parseInt(form.guests) }),
      });
      const data = await res.json();
      if (data.success) {
        showToast('🎉 Reservation confirmed! See you soon!', 'success');
        setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
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
    <section className="reservation section" id="reservation">
      <div className="container">
        <div className="reservation-wrapper">
          <div className="reservation-info reveal">
            <span className="section-label">Reservations</span>
            <h2 className="section-title">
              Book Your <span className="highlight">Table</span>
            </h2>
            <p className="section-subtitle">
              Secure your spot for an unforgettable dining experience. We recommend booking in advance for weekends.
            </p>
            <div className="reservation-details">
              <div className="reservation-detail">
                <div className="reservation-detail-icon">🕐</div>
                <div>
                  <div className="reservation-detail-title">Opening Hours</div>
                  <div className="reservation-detail-text">
                    Mon–Thu: 11:00 AM – 10:00 PM<br />
                    Fri–Sun: 11:00 AM – 11:30 PM
                  </div>
                </div>
              </div>
              <div className="reservation-detail">
                <div className="reservation-detail-icon">📍</div>
                <div>
                  <div className="reservation-detail-title">Location</div>
                  <div className="reservation-detail-text">
                    420 Fiesta Boulevard<br />
                    Downtown, Mexico City Vibes
                  </div>
                </div>
              </div>
              <div className="reservation-detail">
                <div className="reservation-detail-icon">📞</div>
                <div>
                  <div className="reservation-detail-title">Call Us</div>
                  <div className="reservation-detail-text">(555) 123-FUEGO</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card reservation-form-card reveal">
            <h3 className="reservation-form-title">Make a Reservation</h3>
            <form className="reservation-form" onSubmit={handleSubmit} id="reservation-form">
              <div className="form-group">
                <label className="form-label" htmlFor="res-name">Full Name</label>
                <input className="form-input" type="text" id="res-name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
              </div>
              <div className="reservation-form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="res-email">Email</label>
                  <input className="form-input" type="email" id="res-email" name="email" placeholder="john@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="res-phone">Phone</label>
                  <input className="form-input" type="tel" id="res-phone" name="phone" placeholder="(555) 123-4567" value={form.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="reservation-form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="res-date">Date</label>
                  <input className="form-input" type="date" id="res-date" name="date" value={form.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="res-time">Time</label>
                  <input className="form-input" type="time" id="res-time" name="time" value={form.time} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="res-guests">Number of Guests</label>
                <select className="form-input" id="res-guests" name="guests" value={form.guests} onChange={handleChange}>
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn-primary" disabled={submitting} id="reservation-submit">
                {submitting ? 'Booking...' : '🔥 Reserve Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
