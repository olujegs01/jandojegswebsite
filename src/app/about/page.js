import '../../styles/about.css';

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>At Jandojegs, we are committed to revolutionizing delivery and logistics with advanced technology and a customer-first approach.</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>To make deliveries faster, smarter, and more reliable for businesses of all sizes, using innovative AI-powered solutions.</p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us</h2>
          <p>We combine cutting-edge technology, real-time tracking, and exceptional support to help businesses succeed and grow.</p>
        </div>
      </div>
    </section>
  );
}
