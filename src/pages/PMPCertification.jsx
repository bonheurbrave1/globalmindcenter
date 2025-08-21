// src/pages/services/PMPCertification.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PMPCertification = () => {
  return (
    <div className="page service-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; 
          <Link to="/services">Services</Link> &gt; 
          <Link to="/services/professional-certification">Professional Certification</Link> &gt; 
          <span>PMP Certification</span>
        </div>
        
        <div className="service-header">
          <h1>PMP Certification Training</h1>
          <p className="service-intro">Prepare for the Project Management Professional (PMP)® certification exam with our comprehensive training program.</p>
        </div>
        
        <div className="service-content">
          <div className="service-details">
            <div className="service-description">
              <h2>About PMP Certification</h2>
              <p>The PMP® certification is the gold standard in project management certification, recognized globally across industries. Our training program is designed to help you master the concepts, processes, and knowledge areas needed to pass the PMP exam and excel in your project management career.</p>
              
              <h3>Program Benefits</h3>
              <ul>
                <li>35 contact hours required for PMP application</li>
                <li>Comprehensive study materials and resources</li>
                <li>Practice exams with detailed explanations</li>
                <li>Expert instructors with real-world PMP experience</li>
                <li>Flexible learning options: in-person, online, or hybrid</li>
                <li>Post-training support until you pass your exam</li>
              </ul>
              
              <h3>Who Should Attend</h3>
              <p>This program is ideal for project managers, associate project managers, project coordinators, and any professionals seeking to validate their skills with a globally recognized certification.</p>
              
              <h3>Course Outline</h3>
              <ol>
                <li>Introduction to Project Management and the PMP Exam</li>
                <li>Project Environment and Governance</li>
                <li>Project Integration Management</li>
                <li>Project Scope Management</li>
                <li>Project Schedule Management</li>
                <li>Project Cost Management</li>
                <li>Project Quality Management</li>
                <li>Project Resource Management</li>
                <li>Project Communications Management</li>
                <li>Project Risk Management</li>
                <li>Project Procurement Management</li>
                <li>Project Stakeholder Management</li>
                <li>Agile and Hybrid Approaches</li>
                <li>Exam Preparation Strategies</li>
              </ol>
            </div>
            
            <div className="service-sidebar">
              <div className="info-box">
                <h4>Course Details</h4>
                <div className="info-item">
                  <strong>Duration:</strong> 4 days intensive or 8 weeks part-time
                </div>
                <div className="info-item">
                  <strong>Format:</strong> Classroom, Online, or Hybrid
                </div>
                <div className="info-item">
                  <strong>PDUs:</strong> 35 Contact Hours
                </div>
                <div className="info-item">
                  <strong>Price:</strong> $1,299 - $1,899
                </div>
                <button className="btn btn-primary">Enroll Now</button>
                <button className="btn btn-secondary">Download Brochure</button>
              </div>
              
              <div className="info-box">
                <h4>Upcoming Sessions</h4>
                <div className="session-item">
                  <strong>January 15-18, 2024</strong>
                  <p>Virtual Classroom</p>
                </div>
                <div className="session-item">
                  <strong>February 12-15, 2024</strong>
                  <p>New York Location</p>
                </div>
                <div className="session-item">
                  <strong>March 11-14, 2024</strong>
                  <p>Virtual Classroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMPCertification;