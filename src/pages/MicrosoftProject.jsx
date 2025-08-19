// src/pages/MicrosoftProject.js
export default function MicrosoftProject() {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">MICROSOFT PROJECT MASTERY</h1>
        <p className="text-lg text-gray-700 mb-8">
          Hands-on training for effective project planning and management using Microsoft Project.
        </p>
  
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who should attend?</h2>
            <p className="text-gray-700">
              Project managers, schedulers, and anyone responsible for project planning using MS Project.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What you will gain</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>MS Project interface mastery</li>
              <li>Schedule creation skills</li>
              <li>Resource allocation techniques</li>
              <li>Progress tracking methods</li>
              <li>Custom reporting</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">PROGRAMME OUTLINE</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Introduction to MS Project</li>
              <li>Creating Project Plans</li>
              <li>Tasks and Dependencies</li>
              <li>Resource Management</li>
              <li>Tracking Progress</li>
              <li>Advanced Features</li>
              <li>Reporting</li>
              <li>Best Practices</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }