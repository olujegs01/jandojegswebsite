import '../../styles/learn.css';

export default function LearnPage() {
  return (
    <section className="learn-section">
      <div className="learn-header">
        <h1>Learn with JANDOJEGS</h1>
        <p>Grow your logistics business with expert tips, guides, and tools.</p>
      </div>

      <div className="learn-cards">
        <div className="card">
          <h2>Getting Started</h2>
          <p>Learn how to set up your digital logistics operations in minutes.</p>
          <a href="#">Read More →</a>
        </div>

        <div className="card">
          <h2>Advanced Strategies</h2>
          <p>Scale your delivery network and optimize routing like a pro.</p>
          <a href="#">Discover More →</a>
        </div>

        <div className="card">
          <h2>Industry Insights</h2>
          <p>Stay ahead with the latest logistics trends and technologies.</p>
          <a href="#">Explore Now →</a>
        </div>
      </div>
    </section>
  );
}
