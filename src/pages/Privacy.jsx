import { motion } from 'framer-motion';

export default function Privacy() {
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                At Global Mind Center, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Professional information (job title, company, experience level)</li>
                <li>Payment information for course enrollment</li>
                <li>Usage data and website analytics</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Provide and manage our training services</li>
                <li>Process enrollments and payments</li>
                <li>Communicate with you about your account or our services</li>
                <li>Improve our website and course offerings</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Your Rights</h2>
              <p className="text-gray-600">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided on our website.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}