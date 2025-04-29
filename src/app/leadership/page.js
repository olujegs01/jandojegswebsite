'use client';

import React from 'react';
import '../../styles/leadership.css';

export default function LeadershipPage() {
  return (
    <div className="leadership-container">
      <h1>Leadership</h1>
      <p>Meet the visionary team behind Jandojegs.</p>

      <div className="leadership-members">
        <div className="member">
          <h2>John Doe</h2>
          <p>Founder & CEO</p>
          <p>John leads the team with a vision for innovation in logistics.</p>
        </div>

        <div className="member">
          <h2>Jane Smith</h2>
          <p>COO</p>
          <p>Jane ensures smooth operations across all teams, optimizing delivery systems.</p>
        </div>

        <div className="member">
          <h2>Alex Brown</h2>
          <p>CTO</p>
          <p>Alex drives the technology behind our AI and logistics solutions.</p>
        </div>
      </div>
    </div>
  );
}
