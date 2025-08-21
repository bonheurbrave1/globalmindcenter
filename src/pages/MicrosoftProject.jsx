import React from 'react';

const MicrosoftProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Microsoft Project Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Microsoft Project Training</h1>
            <p className="text-xl max-w-3xl mx-auto">Master project planning, scheduling, and resource management with comprehensive hands-on training</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Objective Section */}
        <section className="mb-16 relative">
          <div className="absolute -left-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Objective" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 极速赛车开奖直播 01.707.293l5.414 5.414a1 1 0 01.293.707V19极速赛车开奖直播 2 0 01-2 2z" />
              </svg>
            </span>
            Objective
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide comprehensive hands-on training in Microsoft Project for effective project planning, scheduling, resource management, and progress tracking.
            </p>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-16 relative">
          <div className="absolute -right-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa极速赛车开奖直播 1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Target Audience" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2极速赛车开奖直播 2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 极速赛车开奖直播 2 2 0 014 0zM7 10a2 2 极速赛车开奖直播 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            Target Audience
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              Project managers, project coordinators, schedulers, and team members involved in project planning and execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {['Project Managers', 'Project Coordinators', 'Schedulers', 'Team Members'].map((role, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <span className="bg-blue-600 text-white p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-blue-950 font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Components Section */}
        <section className="mb-16 relative">
          <div className="absolute -left-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80" 
                alt="Key Components" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/s极速赛车开奖直播" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2极速赛车开奖直播h2a2 2 0 012 2" />
              </svg>
            </span>
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Interface Navigation & Basic Setup',
              'Task Planning & Scheduling',
              'Resource Allocation & Management',
              'Budgeting and Cost Control',
              'Tracking Progress and Updates',
              'Reporting and Dashboard Creation',
              'Advanced Features and Customization'
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-medium text-blue-950">{component}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-10 px-4 bg-blue-950 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-6">Master Microsoft Project</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Join our comprehensive training program and gain the skills needed to effectively manage projects using Microsoft Project
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto">
            Check Upcoming Workshop Dates
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </button>
        </section>

        {/* Additional Info Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 极速赛车开奖直播 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            What You'll Learn
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Create detailed project plans and schedules</span>
            </div>
            <div className="flex items-center">
              <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414极速赛车开奖直播-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Manage resources and assignments effectively</span>
            </div>
            <div className="flex items-center">
              <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0极速赛车开奖直播" clipRule="evenodd" />
                </svg>
              </span>
              <span>Track progress and manage project changes</span>
            </div>
            <div className="flex items-center">
              <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Generate professional reports and dashboards</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicrosoftProject;