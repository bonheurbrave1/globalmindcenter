import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';
import { FiDownload, FiFileText, FiBookOpen, FiClipboard, FiLayers, FiFile } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-feather';
const resources = [
  {
    title: "PMP® Exam Content Outline",
    description: "Official PMI document detailing the exam structure and content areas",
    type: "PDF",
    icon: <FiFileText className="text-2xl" />
  },
  {
    title: "PMBOK® Guide Summary",
    description: "Condensed version of key concepts from the PMBOK® Guide",
    type: "PDF",
    icon: <FiBookOpen className="text-2xl" />
  },
  {
    title: "Practice Exam Questions",
    description: "Sample questions to test your knowledge and prepare for the exam",
    type: "Online Quiz",
    icon: <FiClipboard className="text-2xl" />
  },
  {
    title: "Study Plan Template",
    description: "Customizable schedule to organize your exam preparation",
    type: "Template",
    icon: <FiLayers className="text-2xl" />
  },
  {
    title: "PMP® Application Guide",
    description: "Step-by-step instructions for completing your PMP® application",
    type: "Guide",
    icon: <FiFile className="text-2xl" />
  },
  {
    title: "Project Management Templates",
    description: "Collection of templates for project charters, plans, and reports",
    type: "Templates",
    icon: <FiLayers className="text-2xl" />
  }
];

export default function Resources() {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PMP® <span className="text-blue-950">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential materials to accelerate your PMP certification journey
          </p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-950 p-3 rounded-lg mr-4">
                      {resource.icon}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Resources CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-2xl p-8 md:p-10 text-white shadow-xl mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Unlock Premium Resources</h2>
            <p className="text-lg text-blue-100 mb-6">
              Enroll in our PMP course to access exclusive study materials, practice exams, and personalized coaching.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Premium Resources Include:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <TiTick className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Full-length mock exams</span>
                  </li>
                  <li className="flex items-start">
                    <TiTick className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Video explanations</span>
                  </li>
                  <li className="flex items-start">
                    <TiTick className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Instructor Q&A sessions</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <a href="https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit">
                <button className="bg-white text-blue-950 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg">
                  Enroll for Full Access
                </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FAQAccordion />
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need More Resources?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our support team for personalized recommendations based on your learning needs.
          </p>
          <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md">
            <a href="/contact">Contact Support</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
}