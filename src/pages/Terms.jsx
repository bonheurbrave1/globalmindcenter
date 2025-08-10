import { motion } from 'framer-motion';

export default function Terms() {
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Welcome to Global Mind Center. These terms and conditions outline the rules and regulations for the use of our website and services.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                Unless otherwise stated, Global Mind Center and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Restrictions</h2>
              <p className="text-gray-600 mb-4">
                You are specifically restricted from:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Publishing any website material in any other media</li>
                <li>Selling, sublicensing, or commercializing any website material</li>
                <li>Using this website in any way that is damaging to the website</li>
                <li>Using this website contrary to applicable laws and regulations</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Course Enrollment</h2>
              <p className="text-gray-600 mb-4">
                By enrolling in our courses, you agree to pay the specified fees. Course fees are non-refundable except as specified in our Refund Policy.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Changes to Terms</h2>
              <p className="text-gray-600">
                Global Mind Center reserves the right to modify these terms at any time. By continuing to use the website after any revisions become effective, you agree to be bound by the updated terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}