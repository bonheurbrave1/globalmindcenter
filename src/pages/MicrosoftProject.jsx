// components/trainings/MicrosoftProject.jsx
import React from 'react';

const MicrosoftProject = () => {
  return (
    <div className="training-container">
      <h1>Microsoft Project Training</h1>
      
      <div className="training-section">
        <h2>Objective</h2>
        <p>To provide comprehensive hands-on training in Microsoft Project for effective project planning, scheduling, resource management, and progress tracking.</p>
      </div>

      <div className="training-section">
        <h2>Target Audience</h2>
        <p>Project managers, project coordinators, schedulers, and team members involved in project planning and execution.</p>
      </div>

      <div className="training-section">
        <h2>Key Components</h2>
        <ul className="components-list">
          <li>Interface Navigation & Basic Setup</li>
          <li>Task Planning & Scheduling</li>
          <li>Resource Allocation & Management</li>
          <li>Budgeting and Cost Control</li>
          <li>Tracking Progress and Updates</li>
          <li>Reporting and Dashboard Creation</li>
          <li>Advanced Features and Customization</li>
        </ul>
      </div>

      <button className="enrollment-cta">Check Upcoming Workshop Dates</button>
    </div>
  );
};

export default MicrosoftProject;