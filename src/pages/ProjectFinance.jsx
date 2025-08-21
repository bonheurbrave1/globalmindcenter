// components/trainings/ProjectFinance.jsx
import React from 'react';

const ProjectFinance = () => {
  return (
    <div className="training-container">
      <h1>Project Finance Training</h1>
      
      <div className="training-section">
        <h2>Objective</h2>
        <p>To equip professionals with the skills to evaluate the financial viability of projects, structure financing, manage budgets, and perform comprehensive cost-benefit analysis.</p>
      </div>

      <div className="training-section">
        <h2>Target Audience</h2>
        <p>Project Managers, Financial Analysts, Investment Analysts, Project Sponsors, Engineers in leadership roles.</p>
      </div>

      <div className="training-section">
        <h2>Key Components</h2>
        <ul className="components-list">
          <li>Financial Fundamentals (NPV, IRR, ROI, Payback Period)</li>
          <li>Cost Estimation & Budgeting Techniques</li>
          <li>Project Funding Structures</li>
          <li>Financial Risk Analysis</li>
          <li>Cash Flow Forecasting & Modeling</li>
          <li>Case Studies of Real-world Project Finance Deals</li>
        </ul>
      </div>

      <button className="enrollment-cta">Request Training Information</button>
    </div>
  );
};

export default ProjectFinance;