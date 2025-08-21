// components/trainings/ProfessionalBusinessAnalysis.jsx
import React from 'react';

const ProfessionalBusinessAnalysis = () => {
  return (
    <div className="training-container">
      <h1>Professional in Business Analysis (PBA)® Certification Preparation</h1>
      
      <div className="certification-header">
        <div className="issuer-badge">
          <h3>Issued by: Project Management Institute (PMI)</h3>
        </div>
        <p className="certification-description">
          Focuses on business analysis and requirements management within projects, programs, and portfolios.
        </p>
      </div>

      <div className="training-section">
        <h2>Objective</h2>
        <p>To equip business analysis professionals with the skills and knowledge necessary to pass the PMI-PBA exam and excel in requirements management, stakeholder engagement, and business solution evaluation.</p>
      </div>

      <div className="training-section">
        <h2>Target Audience</h2>
        <ul className="audience-list">
          <li>Business Analysts</li>
          <li>Requirements Managers</li>
          <li>Project Managers performing BA duties</li>
          <li>Product Owners</li>
          <li>Systems Analysts</li>
        </ul>
      </div>

      <div className="training-section">
        <h2>Program Components</h2>
        <div className="components-grid">
          <div className="component-card">
            <h4>Needs Assessment</h4>
            <p>Techniques for identifying business problems and opportunities</p>
          </div>
          <div className="component-card">
            <h4>Planning & Monitoring</h4>
            <p>Developing comprehensive business analysis plans</p>
          </div>
          <div className="component-card">
            <h4>Elicitation & Analysis</h4>
            <p>Requirements gathering through workshops, interviews, and user stories</p>
          </div>
          <div className="component-card">
            <h4>Traceability & Monitoring</h4>
            <p>Managing requirements throughout the project lifecycle</p>
          </div>
          <div className="component-card">
            <h4>Solution Evaluation</h4>
            <p>Assessing solution performance and business value delivery</p>
          </div>
          <div className="component-card">
            <h4>Exam Preparation</h4>
            <p>Practice tests, exam strategies, and application guidance</p>
          </div>
        </div>
      </div>

      <div className="training-section">
        <h2>Prerequisites</h2>
        <ul className="prerequisites-list">
          <li>Secondary degree with 7,500 hours of business analysis experience</li>
          <li>OR Bachelor's degree with 4,500 hours of business analysis experience</li>
          <li>35 hours of business analysis education</li>
        </ul>
      </div>

      <div className="cta-section">
        <button className="primary-cta">Enroll in PBA Preparation Program</button>
        <button className="secondary-cta">Download Detailed Syllabus</button>
      </div>
    </div>
  );
};

export default ProfessionalBusinessAnalysis;