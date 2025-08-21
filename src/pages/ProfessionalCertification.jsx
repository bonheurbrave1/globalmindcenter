// components/trainings/ProfessionalCertification.jsx
import React, { useState } from 'react';

const ProfessionalCertification = () => {
  const [activeTab, setActiveTab] = useState('pmp');

  const certifications = {
    pmp: {
      code: 'pmp',
      title: 'Project Management Professional (PMP)®',
      issuer: 'Project Management Institute (PMI)',
      description: 'The gold standard project management certification recognized globally.',
      components: [
        'Exam Preparation & Strategy',
        'PMBOK Guide Framework Review',
        'Agile and Hybrid Methodology Integration',
        'Practice Tests and Mock Exams',
        'Application Submission Guidance'
      ]
    },
    pba: {
      code: 'pba',
      title: 'Professional in Business Analysis (PBA)®',
      issuer: 'Project Management Institute (PMI)',
      description: 'Focuses on business analysis and requirements management within projects.',
      components: [
        'Needs Assessment Techniques',
        'Requirements Planning & Management',
        'Stakeholder Engagement Strategies',
        'Traceability and Monitoring',
        'Solution Evaluation Methods'
      ]
    },
    acp: {
      code: 'acp',
      title: 'Agile Certified Practitioner (ACP)®',
      issuer: 'Project Management Institute (PMI)',
      description: 'Demonstrates your knowledge of agile principles and scalable agile practices.',
      components: [
        'Scrum Framework Mastery',
        'Kanban & Lean Practices',
        'Extreme Programming (XP) Techniques',
        'Agile Team Leadership',
        'Scaling Agile Methodologies'
      ]
    },
    rmp: {
      code: 'rmp',
      title: 'PMI Risk Management Professional (PMI-RMP)®',
      issuer: 'Project Management Institute (PMI)',
      description: 'Specializes in identifying, assessing, and mitigating project risks.',
      components: [
        'Risk Identification Techniques',
        'Qualitative & Quantitative Risk Analysis',
        'Risk Response Planning',
        'Risk Monitoring & Control',
        'Enterprise Risk Management'
      ]
    }
  };

  const currentCert = certifications[activeTab];

  return (
    <div className="certification-container">
      <h1>Professional Certification Programs</h1>
      
      <div className="cert-tabs">
        {Object.values(certifications).map(cert => (
          <button
            key={cert.code}
            className={`tab-button ${activeTab === cert.code ? 'active' : ''}`}
            onClick={() => setActiveTab(cert.code)}
          >
            {cert.title}
          </button>
        ))}
      </div>

      <div className="cert-content">
        <h2>{currentCert.title}</h2>
        <p className="issuer">Issued by: {currentCert.issuer}</p>
        <p className="description">{currentCert.description}</p>
        
        <h3>Program Includes:</h3>
        <ul className="components-list">
          {currentCert.components.map((component, index) => (
            <li key={index}>{component}</li>
          ))}
        </ul>

        <button className="certification-cta">Register for {currentCert.title} Preparation</button>
      </div>
    </div>
  );
};

export default ProfessionalCertification;