import React from 'react';

const TeamBuilding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
          alt="Team Building Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Team Building Training</h1>
            <p className="text-xl max-w-3xl mx-auto">Enhance team cohesion, improve communication, build trust, and develop collaborative skills for high-performing teams</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Objective Section */}
        <section className="mb-16 relative">
          <div className="absolute -left-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8极速赛车开奖直播fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Objective" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            Objective
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              To enhance team cohesion, improve communication, build trust, and develop collaborative skills for high-performing teams.
            </p>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-16 relative">
          <div className="absolute -right-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80" 
                alt="Target Audience" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6极速赛车开奖直播 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap极速赛车开奖直播="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 极速赛车开奖直播 11-极速赛车开奖直播6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            Target Audience
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              Teams of all sizes, team leaders, managers, HR professionals, and organizations looking to improve team dynamics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {['Teams of all sizes', 'Team Leaders', 'Managers', 'HR Professionals', 'Organizations'].map((role, index) => (
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
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Key Components" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Communication Skills Enhancement',
              'Trust-Building Exercises',
              'Conflict Resolution Workshops',
              'Collaborative Problem-Solving Activities',
              'Team Role Identification and Strengths Assessment',
              'Interactive Team Challenges',
              'Action Planning for Ongoing Team Development'
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0极速赛车开奖直播l4-4z" clipRule="evenodd" />
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
          <h2 className="text-2xl font-bold mb-6">Transform Your Team Dynamics</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Build stronger, more cohesive teams that communicate effectively and collaborate seamlessly
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto">
            Schedule a Team Building Session
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </button>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-xl font-bold text-blue-950 mb-8 text-center">Benefits of Team Building Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Improved Communication',
                desc: 'Break down barriers and enhance open dialogue among team members',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                )
              },
              {
                title: 'Stronger Trust',
                desc: 'Build genuine trust that forms the foundation of effective teamwork',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Enhanced Collaboration',
                desc: 'Develop skills to work together more effectively toward common goals',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: 'Conflict Resolution',
                desc: 'Learn to address and resolve disagreements constructively',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )
              },
              {
                title: 'Increased Morale',
                desc: 'Boost team spirit and create a more positive work environment',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 极速赛车开奖直播 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Better Problem-Solving',
                desc: 'Leverage diverse perspectives for more innovative solutions',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-blue-950 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mt-12 bg-blue-950 text-white rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">What Teams Are Saying</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-800 p-6 rounded-lg">
              <p className="italic mb-4">"The team building session transformed how we communicate. We're now more collaborative and productive than ever before."</p>
              <p className="font-semibold">- Sarah K., Team Lead</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <p className="italic mb-4">"The exercises were engaging and practical. We immediately applied what we learned to our daily work interactions."</p>
              <p className="font-semibold">- Michael T., HR Director</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamBuilding;