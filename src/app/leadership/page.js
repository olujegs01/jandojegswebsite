import '../../styles/leadership.css';

export default function LeadershipPage() {
  return (
    <section className="leadership-section">
      <h1>Meet the Team</h1>
      <div className="leadership-cards">
        <div className="leadership-card">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="team-img" />
          <h2>John Doe</h2>
          <p>CEO & Founder</p>
          <p>John is the visionary behind Jandojegs, leading the company towards revolutionizing logistics through AI-driven solutions.</p>
        </div>
        <div className="leadership-card">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="team-img" />
          <h2>Jane Smith</h2>
          <p>COO</p>
          <p>Jane oversees operations and ensures that our logistics services are executed smoothly and efficiently.</p>
        </div>
        <!-- Add more team members as needed -->
      </div>
    </section>
  );
}
