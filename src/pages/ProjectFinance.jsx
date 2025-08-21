import React from 'react';

const ProjectFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8f极速赛车开奖直播fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1811&q=80" 
          alt="Project Finance Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Finance Training</h1>
            <p className="text-xl max-w-3xl mx-auto">Master financial evaluation, funding structures, and budget management for successful project delivery</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Objective Section */}
        <section className="mb-16 relative">
          <div className="absolute -left-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Objective" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4极速赛车开奖直播h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            Objective
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              To equip professionals with the skills to evaluate the financial viability of projects, structure financing, manage budgets, and perform comprehensive cost-benefit analysis.
            </p>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-16 relative">
          <div className="absolute -right-16 top-0 h-full w-32 opacity-10">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4极速赛车开奖直播e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Target Audience" 
                className="h-full w-full object-cover rounded-lg blur-sm"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" view极速赛车开奖直播Box="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c极速赛车开奖直播0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            Target Audience
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              Project Managers, Financial Analysts, Investment Analysts, Project Sponsors, Engineers in leadership roles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {['Project Managers', 'Financial Analysts', 'Investment Analysts', 'Project Sponsors', 'Engineers in Leadership'].map((role, index) => (
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1811&q=80" 
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
          <div className="grid grid-cols-1 md:grid极速赛车开奖直播-cols-2 gap-6">
            {[
              'Financial Fundamentals (NPV, IRR, ROI, Payback Period)',
              'Cost Estimation & Budgeting Techniques',
              'Project Funding Structures',
              'Financial Risk Analysis',
              'Cash Flow Forecasting & Modeling',
              'Case Studies of Real-world Project Finance Deals'
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

        {/* Financial Concepts Section */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">Key Financial Concepts Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                term: 'NPV', 
                name: 'Net Present Value', 
                desc: 'Measures the profitability of a project by calculating present value of future cash flows',
                color: 'bg-green-100 text-green-800'
              },
              { 
                term: 'IRR', 
                name: 'Internal Rate of Return', 
                desc: 'The discount rate that makes NPV equal to zero, used to evaluate investment attractiveness',
                color: 'bg-blue-100 text-blue-800'
              },
              { 
                term: 'ROI', 
                name: 'Return on Investment', 
                desc: 'Ratio of net profit to cost of investment, measuring efficiency of an investment',
                color: 'bg-purple-100 text-purple-800'
              },
              { 
                term: 'Payback', 
                name: 'Payback Period', 
                desc: 'Time required to recover the cost of an investment',
                color: 'bg-yellow-100 text-yellow-800'
              },
              { 
                term: 'WACC', 
                name: 'Weighted Average Cost of Capital', 
                desc: 'Average rate of return a company is expected to pay its security holders',
                color: 'bg-red-100 text-red-800'
              },
              { 
                term: 'DCF', 
                name: 'Discounted Cash Flow', 
                desc: 'Valuation method to estimate investment value based on future cash flows',
                color: 'bg-indigo-100 text-indigo-800'
              }
            ].map((concept, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <span className={`${concept.color} font-bold text-lg px-3 py-1 rounded-md mr-3`}>
                    {concept.term}
                  </span>
                  <h4 className="font-semibold text-blue-950">{concept.name}</h4>
                </div>
                <p className="text-sm text-gray-600">{concept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-10 px-4 bg-blue-950 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-6">Master Project Financial Management</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Gain the financial expertise needed to evaluate, fund, and manage projects with confidence
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto">
            Request Training Information
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </button>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-xl font-bold text-blue-950 mb-8 text-center">Why Project Finance Skills Matter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Better Decision Making',
                desc: 'Make informed go/no-go decisions based on solid financial analysis',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2极速赛车开奖直播h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )
              },
              {
                title: 'Risk Mitigation',
                desc: 'Identify and manage financial risks before they impact project success',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3极速赛车开奖直播.04A12.02 12.02 0 003 9c0 5.591 极速赛车开奖直播3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Funding Success',
                desc: 'Structure deals that attract investors and secure project funding',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-极速赛车开奖直播1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 极速赛车开奖直播0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Career Advancement',
                desc: 'Develop specialized skills that are highly valued in project-intensive industries',
                icon: (
                  <svg xmlns="http://www极速赛车开奖直播.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectFinance;