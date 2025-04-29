'use client';
import { useState } from 'react';
import '../../styles/contact.css';

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    volume: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      volume: '',
      message: ''
    });

    // Backend logic goes here if needed
  };

  return (
    <div className="contact-container">
      <div className="left-column">
        <h2 className="hero-heading">Save time and money with direct deliveries.</h2>
        <p>
          Discover how Jandojegs's AI solutions can optimize and help your business grow.
          To learn more, fill out this form now!
        </p>

        <ul>
          <li>Automate your delivery operations</li>
          <li>Delight your customers</li>
          <li>Grow with no-commission</li>
          <li>Unlock a new revenue stream</li>
        </ul>

        <p className="contact-info"><strong>Phone:</strong> 312-860-4380</p>
        <p className="contact-info"><strong>Email:</strong> info@jandojegs.co</p>
      </div>

      <div className="right-column">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Company Name:</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Delivery Volume:</label>
            <select name="volume" value={form.volume} onChange={handleChange}>
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="form-group">
            <label>Additional Comments:</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your business needs and timeline" required />
          </div>

          <button type="submit">Send Message</button>

          {submitted && (
            <p style={{ color: 'green', marginTop: '1rem' }}>
              ✅ Thank you! We'll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
