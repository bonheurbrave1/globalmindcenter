import { motion } from 'framer-motion';
import { CheckCircle, Zap, Award, Clock, Monitor } from 'react-feather';
import { Link } from 'react-router-dom';
export default function PricingTable() {
  const pricing = {
    courseFee: "700,000 RWF",
    examFee: "$429",
    duration: "2 months",
    delivery: "Physical and Online",
    features: [
      "Comprehensive PMP training",
      "PMBOK® Guide coverage",
      "5 full-length practice exams",
      "Exam application guidance",
      "Digital study materials & resources",
      "24/7 instructor support",
      "Money-back guarantee*",
      "PMP exam pass guarantee"
    ],
    paymentOptions: [
      "Full payment discount (5% off)",
      "Installment plans available",
      "Corporate group rates"
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium PMP training with proven results at competitive pricing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pricing Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Standard Plan</h3>
              </div>
              
              <div className="mb-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">{pricing.courseFee}</div>
                <div className="text-gray-500">+ {pricing.examFee} PMI exam fee</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pricing.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={"/contact"}>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:-translate-y-1">
                Contact Us
              </button>
              </Link>
            </div>
          </motion.div>

          {/* Featured Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 -right-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-2xl"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-purple-50 text-purple-600 mr-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Premium Plan</h3>
                  <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                
                <div className="mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">750,000 RWF</div>
                  <div className="text-gray-500">+ {pricing.examFee} PMI exam fee</div>
                  <div className="text-sm text-green-600 mt-1">Save 50,000 RWF with bundle</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pricing.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={"/enroll"}>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all transform hover:-translate-y-1 shadow-lg">
                  Enroll Now
                </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Pricing Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Self-Paced</h3>
              </div>
              
              <div className="mb-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">500,000 RWF</div>
                <div className="text-gray-500">+ {pricing.examFee} PMI exam fee</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pricing.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="flex items-start text-gray-400">
                  <CheckCircle className="mt-1 mr-3 flex-shrink-0" />
                  <span>Recorded lectures only</span>
                </li>
              </ul>
              
              <Link to={`/contact`}>
              <button className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Contact Us
              </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Flexible Payment Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.paymentOptions.map((option, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <Award size={18} />
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
          </p>
        </motion.div>
      </div>
    </section>
  );
}