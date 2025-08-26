import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const faqs = [
  
  {
    question: "How much does the course cost?",
    answer: "The course fee is 700,000 RWF plus the PMI exam fee of $429. We offer flexible payment options."
  },
  {
    question: "What are the prerequisites for the PMP® exam?",
    answer: "You need either: 1) A secondary degree with 5 years of project management experience and 35 hours of project management education, or 2) A four-year degree with 3 years of project management experience and 35 hours of project management education."
  },
  {
    question: "Is the course available online?",
    answer: "Yes, we offer both in-person and online delivery options to accommodate different learning preferences."
  },
  {
    question: "What study materials are provided?",
    answer: "You'll receive comprehensive study guides, practice exams, and access to our online learning portal with additional resources."
  },
  {
    question: "How do I register for the PMP® exam?",
    answer: "After completing our course, we'll guide you through the PMI registration process to schedule your exam at a testing center or online."
  }
];

export default function FAQAccordion() {
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
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-4 border-b border-gray-200"
            >
              <button
                className={`w-full flex justify-between items-center py-4 text-left ${expandedIndex === index ? 'text-primary' : 'text-gray-800'}`}
                onClick={() => toggleExpand(index)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                {expandedIndex === index ? (
                  <ChevronUp className="shrink-0" />
                ) : (
                  <ChevronDown className="shrink-0" />
                )}
              </button>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}