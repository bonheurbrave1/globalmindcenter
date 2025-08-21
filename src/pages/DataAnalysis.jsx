// components/trainings/DataAnalysis.jsx
import React from 'react';

const DataAnalysis = () => {
  return (
    <div className="training-container">
      <h1>Data Analysis Training</h1>
      
      <div className="training-section">
        <h2>Objective</h2>
        <p>To enable professionals to collect, process, analyze, and visualize data to extract meaningful insights and support data-driven decision-making.</p>
      </div>

      <div className="training-section">
        <h2>Target Audience</h2>
        <p>Business analysts, marketing professionals, operations staff, finance personnel, and any role requiring data interpretation.</p>
      </div>

      <div className="training-section">
        <h2>Key Components</h2>
        <ul className="components-list">
          <li>Data Literacy & Fundamentals</li>
          <li>Data Cleaning & Wrangling (Excel, SQL, Python/Pandas)</li>
          <li>Statistical Analysis Fundamentals</li>
          <li>Data Visualization (Tableau, Power BI)</li>
          <li>Data Interpretation & Storytelling</li>
          <li>Practical Case Studies & Exercises</li>
        </ul>
      </div>

      <button className="enrollment-cta">View Course Schedule</button>
    </div>
  );
};

export default DataAnalysis;