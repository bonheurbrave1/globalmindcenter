import React from 'react';

const LeadershipTraining = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Leadership Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership Training</h1>
            <p className="text-xl max-w-3xl mx-auto">Develop essential skills for leading teams, driving performance, and inspiring others</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Objective Section */}
        <section className="mb-16 relative">
          <div className="absolute -left-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMj极速赛车开奖直播A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f极速赛车开奖直播Hx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
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
              To develop essential skills for leading teams, driving performance, inspiring others, and managing change effectively within an organization.
            </p>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-16 relative">
          <div className="absolute -right-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Target Audience" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6极速赛车开奖直播 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7极速赛车开奖直播a3 3 0 11-极速赛车开奖直播6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            Target Audience
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              New managers, emerging leaders, mid-level managers, and senior executives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {['New Managers', 'Emerging Leaders', 'Mid-Level Managers', 'Senior Executives'].map((role, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg text-center">
                  <span className="bg-blue-600 text-white p-2 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 极速赛车开奖直播3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-blue-950 font-medium text-sm">{role}</span>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2极速赛车开奖直播v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Self-Awareness & Emotional Intelligence', icon: '🧠' },
              { title: 'Effective Communication & Feedback Techniques', icon: '💬' },
              { title: 'Strategic Thinking & Decision-Making', icon: '🎯' },
              { title: 'Coaching & Talent Development', icon: '👥' },
              { title: 'Change Management Leadership', icon: '🔄' },
              { title: 'Conflict Resolution Strategies', icon: '🤝' }
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow group">
                <div className="flex items-start">
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">{component.icon}</span>
                  <h3 className="text-lg font-medium text-blue-950">{component.title}</h3>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="text-blue-600 text-sm font-medium flex items-center">
                    <span>Explore module</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Benefits */}
        <section className="mb-16 bg-blue-950 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Enhanced Leadership Skills', icon: '⭐' },
              { title: 'Improved Team Performance', icon: '🚀' },
              { title: 'Better Decision Making', icon: '📊' },
              { title: 'Stronger Organizational Impact', icon: '🏢' }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-10 px-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-6">Transform Your Leadership Journey</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Download our comprehensive leadership program outline and discover how our training can help you become a more effective leader
          </p>
          <button className="bg-white hover:bg-blue-50 text-blue-950 font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto">
            Download Leadership Program Outline
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </section>

        {/* Testimonial Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-xl font-bold text-blue-950 mb-6 text-center">What Past Participants Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-gray-600 italic">"This leadership program transformed my approach to team management. The practical strategies I learned are now part of my daily leadership toolkit."</p>
              <p className="text-blue-950 font-medium mt-3">— Sarah Johnson, Senior Manager</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-gray-600 italic">"The emotional intelligence and communication modules were game-changers for me. I've seen significant improvement in my team's engagement and performance."</p>
              <p className="text-blue-950 font-medium mt-3">— Michael Chen, Director</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeadershipTraining;