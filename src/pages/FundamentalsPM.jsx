// components/trainings/FundamentalsPM.jsx
import React from 'react';

const FundamentalsPM = () => {
  return (
    <div className="training-container">
      <h1>Fundamentals of Project Management</h1>
      
      <div className="training-section">
        <h2>Objective</h2>
        <p>To provide a solid foundation in project management principles, processes, and best practices for successful project delivery.</p>
      </div>

      <div className="training-section">
        <h2>Target Audience</h2>
        <p>Aspiring project managers, team members, new project managers, and professionals seeking to understand project management basics.</p>
      </div>

      <div className="training-section">
        <h2>Key Components</h2>
        <ul className="components-list">
          <li>Project Lifecycle & Phases</li>
          <li>Initiation and Planning Fundamentals</li>
          <li>Scope, Schedule, and Cost Management Basics</li>
          <li>Risk Identification and Management</li>
          <li>Stakeholder Engagement Strategies</li>
          <li>Quality Management Principles</li>
          <li>Project Closure and Lessons Learned</li>
        </ul>
      </div>

      <button className="enrollment-cta">Enroll in Fundamentals Course</button>
    </div>
  );
};

export default FundamentalsPM;