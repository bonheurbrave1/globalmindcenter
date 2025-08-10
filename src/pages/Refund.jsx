import { motion } from 'framer-motion';

export default function Refund() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Refund Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Global Mind Center strives to provide high-quality training services. Please review our refund policy carefully before enrolling in any of our courses.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Course Fees</h2>
              <p className="text-gray-600 mb-4">
                Course fees are generally non-refundable. However, we may consider refund requests under the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>If the course is canceled by Global Mind Center</li>
                <li>If you request a refund within 3 days of enrollment and before accessing any course materials</li>
                <li>Exceptional circumstances at our discretion</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. PMI Exam Fees</h2>
              <p className="text-gray-600 mb-4">
                The PMI exam fee ($429) is paid directly to PMI and is subject to PMI's refund policy. Global Mind Center has no control over these fees.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Refund Process</h2>
              <p className="text-gray-600 mb-4">
                To request a refund, please contact us at @infoglobalmindcenter with your enrollment details. Approved refunds will be processed within 14 business days.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Course Transfers</h2>
              <p className="text-gray-600">
                Instead of a refund, you may request to transfer your enrollment to a future course session, subject to availability and any applicable fees.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}