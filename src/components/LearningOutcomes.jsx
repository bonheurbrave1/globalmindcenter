import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const outcomes = [
  "Understand the PMI framework: Explain the five process groups and ten knowledge areas in project management as defined by the PMBOK® Guide.",
  "Develop detailed project plans and schedules",
  "Manage project risks and changes effectively",
  "Develop comprehensive project plans: Create effective project charters, scopes, schedules, and budgets aligned with organizational goals.",
  "Manage project execution: Apply tools and techniques to lead teams, manage resources, and ensure quality deliverables.",
  "Identify and control risks: Assess potential project risks and implement risk response strategies to minimize impact.",
  "Communicate effectively: Engage stakeholders with clear, timely communication and reporting methods.",
  "Handle project changes: Manage change requests and maintain project alignment through integrated change control processes.",
  "Prepare for the PMP exam: Use exam-focused strategies and practice questions to confidently approach and pass the PMP certification exam.",
  "Apply ethical standards: Demonstrate professional responsibility and adhere to PMI's Code of Ethics and Professional Conduct."
];

export default function LearningOutcomes() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          What You Will Learn
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-4 overflow-hidden"
            >
              <div 
                className={`p-4 rounded-lg cursor-pointer transition-all ${expandedIndex === index ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">
                    <span className="mr-2 font-bold">{index + 1}.</span>
                    {outcome.split(':')[0]}
                  </h3>
                  {expandedIndex === index ? (
                    <ChevronUp className="shrink-0" />
                  ) : (
                    <ChevronDown className="shrink-0" />
                  )}
                </div>
              </div>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 bg-gray-50 rounded-b-lg"
                >
                  <p className="text-gray-700">{outcome.split(':')[1] || outcome}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}