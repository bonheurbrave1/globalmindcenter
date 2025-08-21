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
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
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
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
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
      ],
      image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80'
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
      ],
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  };

  const currentCert = certifications[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Professional Certification Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advance your career with globally recognized certifications from the Project Management Institute
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.values(certifications).map(cert => (
            <button
              key={cert.code}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === cert.code 
                  ? 'bg-blue-950 text-white shadow-lg' 
                  : 'bg-white text-blue-950 border border-blue-200 hover:bg-blue-50'
              }`}
              onClick={() => setActiveTab(cert.code)}
            >
              {cert.title.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Certification Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-2/5 relative">
              <img 
                src={currentCert.image} 
                alt={currentCert.title} 
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-950/20"></div>
            </div>
            
            {/* Content Section */}
            <div className="md:w-3/5 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {currentCert.issuer}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-blue-950 mb-4">{currentCert.title}</h2>
              <p className="text-lg text-gray-700 mb-6">{currentCert.description}</p>
              
              <h3 className="text-xl font-semibold text-blue-950 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Program Includes:
              </h3>
              
              <ul className="space-y-3 mb-8">
                {currentCert.components.map((component, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{component}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                Register for {currentCert.title.split('(')[0].trim()} Preparation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 极速赛车开奖直播 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* All Certifications Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-950 mb-8 text-center">Explore All Certification Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(certifications).map(cert => (
              <div 
                key={cert.code} 
                className={`bg-white rounded-xl shadow-md p-6 border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  activeTab === cert.code ? 'border-blue-600' : 'border-white hover:border-blue-200'
                }`}
                onClick={() => setActiveTab(cert.code)}
              >
                <h3 className="text-xl font-bold text-blue-950 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{cert.description}</p>
                <div className="flex items-center text-sm text-blue-600 font-medium">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCertification;