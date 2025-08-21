// components/trainings/LeadershipTraining.jsx
import React from 'react';

const LeadershipTraining = () => {
  return (
    <div className="training-container">
      <h1>Leadership Training</h1>
      
      <div className="training-section">
        <h2>Objective</h2>
        <p>To develop essential skills for leading teams, driving performance, inspiring others, and managing change effectively within an organization.</p>
      </div>

      <div className="training-section">
        <h2>Target Audience</h2>
        <p>New managers, emerging leaders, mid-level managers, and senior executives.</p>
      </div>

      <div className="training-section">
        <h2>Key Components</h2>
        <ul className="components-list">
          <li>Self-Awareness & Emotional Intelligence</li>
          <li>Effective Communication & Feedback Techniques</li>
          <li>Strategic Thinking & Decision-Making</li>
          <li>Coaching & Talent Development</li>
          <li>Change Management Leadership</li>
          <li>Conflict Resolution Strategies</li>
        </ul>
      </div>

      <button className="enrollment-cta">Download Leadership Program Outline</button>
    </div>
  );
};

export default LeadershipTraining;