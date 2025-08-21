// components/trainings/TeamBuilding.jsx
import React from 'react';

const TeamBuilding = () => {
  return (
    <div className="training-container">
      <h1>Team Building Training</h1>
      
      <div className="training-section">
        <h2>Objective</h2>
        <p>To enhance team cohesion, improve communication, build trust, and develop collaborative skills for high-performing teams.</p>
      </div>

      <div className="training-section">
        <h2>Target Audience</h2>
        <p>Teams of all sizes, team leaders, managers, HR professionals, and organizations looking to improve team dynamics.</p>
      </div>

      <div className="training-section">
        <h2>Key Components</h2>
        <ul className="components-list">
          <li>Communication Skills Enhancement</li>
          <li>Trust-Building Exercises</li>
          <li>Conflict Resolution Workshops</li>
          <li>Collaborative Problem-Solving Activities</li>
          <li>Team Role Identification and Strengths Assessment</li>
          <li>Interactive Team Challenges</li>
          <li>Action Planning for Ongoing Team Development</li>
        </ul>
      </div>

      <button className="enrollment-cta">Schedule a Team Building Session</button>
    </div>
  );
};

export default TeamBuilding;