import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';

const resources = [
  {
    title: "PMP Exam Content Outline",
    description: "Official PMI document detailing the exam structure and content areas",
    type: "PDF"
  },
  {
    title: "PMBOK® Guide Summary",
    description: "Condensed version of key concepts from the PMBOK® Guide",
    type: "PDF"
  },
  {
    title: "Practice Exam Questions",
    description: "Sample questions to test your knowledge and prepare for the exam",
    type: "Online Quiz"
  },
  {
    title: "Study Plan Template",
    description: "Customizable schedule to organize your exam preparation",
    type: "Template"
  },
  {
    title: "PMP Application Guide",
    description: "Step-by-step instructions for completing your PMP application",
    type: "Guide"
  },
  {
    title: "Project Management Templates",
    description: "Collection of templates for project charters, plans, and reports",
    type: "Templates"
  }
];

export default function Resources() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">PMP Resources</h1>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600">
                Access valuable resources to support your PMP certification journey. These materials complement our course content and help you prepare effectively for the exam.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{resource.title}</h3>
                      <p className="text-gray-600 mb-2">{resource.description}</p>
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <FAQAccordion />
      </div>
    </div>
  );
}