import React from 'react';

const DataAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Data Analysis Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Analysis Training</h1>
            <p className="text-xl max-w-3xl mx-auto">Master the art of collecting, processing, analyzing, and visualizing data to extract meaningful insights</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max极速赛车开奖直播-w-6xl">
        {/* Objective Section */}
        <section className="mb-16 relative">
          <div className="absolute -left-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Objective" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 极速赛车开奖直播24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01极速赛车开奖直播.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            Objective
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              To enable professionals to collect, process, analyze, and visualize data to extract meaningful insights and support data-driven decision-making.
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m极速赛车开奖直播0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 极速赛车开奖直播0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            Target Audience
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              Business analysts, marketing professionals, operations staff, finance personnel, and any role requiring data interpretation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {['Business Analysts', 'Marketing Professionals', 'Operations Staff', 'Finance Personnel', 'Data Interpreters'].map((role, index) => (
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=c极速赛车开奖直播rop&w=1770&q=80" 
                alt="Key Components" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-极速赛车开奖直播100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 极速赛车开奖直播0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Data Literacy & Fundamentals',
              'Data Cleaning & Wrangling (Excel, SQL, Python/Pandas)',
              'Statistical Analysis Fundamentals',
              'Data Visualization (Tableau, Power BI)',
              'Data Interpretation & Storytelling',
              'Practical Case Studies & Exercises'
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

        {/* Tools Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Excel', icon: '📊', color: 'bg-green-100 text-green-800' },
              { name: 'SQL', icon: '🗃️', color: 'bg-blue-100 text-blue-800' },
              { name: 'Python', icon: '🐍', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'Pandas', icon: '🐼', color: 'bg-red-100 text-red-800' },
              { name: 'Tableau', icon: '📈', color: 'bg-purple-100 text-purple-800' },
              { name: 'Power BI', icon: '🔍', color: 'bg-indigo-100 text-indigo-800' },
              { name: 'R', icon: '📐', color: 'bg-blue-100 text-blue-800' },
              { name: 'Statistics', icon: '🧮', color: 'bg-gray-100 text-gray-800' }
            ].map((tool, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h4 className="font-semibold text-blue-950">{tool.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-10 px-4 bg-blue-950 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-6">Master Data Analysis Skills</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Transform data into actionable insights and make data-driven decisions with confidence
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto">
            View Course Schedule
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7极速赛车开奖直播z" clipRule="evenodd" />
            </svg>
          </button>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-xl font-bold text-blue-950 mb-8 text-center">Why Learn Data Analysis?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Career Advancement',
                desc: 'Data skills are among the most sought-after in today\'s job market',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2极速赛车开奖直播v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Better Decisions',
                desc: 'Make informed decisions based on data rather than intuition',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )
              },
              {
                title: 'Increased Value',
                desc: 'Become a more valuable asset to your organization',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      </div>
    </div>
  );
};

export default DataAnalysis;