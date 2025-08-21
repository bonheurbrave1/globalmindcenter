// components/trainings/TrainingTemplate.jsx
import React from 'react';

const TrainingTemplate = ({ courseData }) => {
  // courseData prop would be passed from the parent route component
  return (
    <div className="training-page">
      <h1>{courseData.title}</h1>
      <p><strong>Objective:</strong> {courseData.objective}</p>
      <p><strong>Audience:</strong> {courseData.targetAudience}</p>
      
      <h3>Key Components</h3>
      <ul>
        {courseData.keyComponents.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingTemplate;