import { motion } from "framer-motion";
import { FaCheckCircle, FaGlobe, FaChartLine, FaUserTie, FaAward, FaCalendarAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Link } from "react-feather";
import advantages from "../assets/adv.jpeg"
export default function Course() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1581091870622-1c8a1a6c3b1a?auto=format&fit=crop&w=1470&q=80"
          alt="PMP Certification"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-3xl md:text-5xl font-bold mb-4"
            >
              PMP® Certification Training
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Master project management with our PMI-approved program and boost your career
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit" target="__blank">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                Enroll Now
              </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Course Highlights */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <FaGlobe className="text-3xl" />, title: "Global Recognition", text: "Valued by employers worldwide" },
            { icon: <FaChartLine className="text-3xl" />, title: "Salary Boost", text: "Average 16% higher earnings" },
            { icon: <FaUserTie className="text-3xl" />, title: "Career Growth", text: "Leadership opportunities" },
            { icon: <FaAward className="text-3xl" />, title: "PMI Approved", text: "Official course materials" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Course Details */}
        <div className="max-w-6xl mx-auto">
          {/* Course Description */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Description</h2>
                </div>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Our <span className="font-semibold text-blue-600">PMP certification course</span> provides comprehensive training based on the latest PMBOK® Guide, equipping you with the skills to successfully manage projects across industries.
                  </p>
                  <p>
                    Through interactive sessions and real-world case studies, you'll master the ten knowledge areas of project management including scope, schedule, cost, quality, and risk management.
                  </p>
                  <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-gray-900 mb-2">Key Learning Outcomes:</h3>
                    <ul className="space-y-2">
                      {[
                        "Develop comprehensive project plans",
                        "Manage project constraints effectively",
                        "Lead project teams with confidence",
                        "Apply agile and hybrid approaches",
                        "Pass the PMP exam on your first attempt"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <TiTick className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative min-h-64">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=870&q=80"
                  alt="Course Overview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Why PMP Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden mb-16 text-white"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-10 order-last lg:order-first">
                <img
                  src={advantages}
                  alt="PMP Benefits"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <FaChartLine className="text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Why Get PMP Certified?</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Higher Earning Potential",
                      content: "PMP certified professionals earn 16% more on average than their non-certified peers."
                    },
                    {
                      title: "Global Career Opportunities",
                      content: "Recognized in virtually every industry and country worldwide."
                    },
                    {
                      title: "Professional Credibility",
                      content: "Demonstrates your commitment to the profession and mastery of project management."
                    },
                    {
                      title: "Organizational Impact",
                      content: "Deliver projects more successfully with proven methodologies."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="bg-white/20 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                        <TiTick className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-blue-100">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Target Audience & Certification */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Target Audience */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                    <FaUserTie className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Who Should Attend?</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    This course is ideal for professionals seeking to validate their project management expertise with a globally recognized credential:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Project Managers and Team Leads",
                      "Program and Portfolio Managers",
                      "PMO Staff and Consultants",
                      "IT Professionals managing projects",
                      "Engineers and Construction Managers",
                      "Professionals transitioning to project management"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <TiTick className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certification */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                    <FaAward className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Certification Process</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Complete Training</h3>
                      <p className="text-gray-600">Attend all sessions and complete assignments</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Apply to PMI</h3>
                      <p className="text-gray-600">Submit your application with required experience</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Schedule Exam</h3>
                      <p className="text-gray-600">Book your exam at a Pearson VUE center</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Become PMP Certified</h3>
                      <p className="text-gray-600">Pass the exam and receive your certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <FaCalendarAlt className="text-2xl mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold">Next Session Starts August 25, 2025</h2>
              </div>
              <p className="text-xl mb-6 text-blue-100">
                Limited seats available for our upcoming cohort. Enroll today to secure your spot!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg">
                  Enroll Now
                </button>
                <Link to={"/contact"}>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
                  Speak to an Advisor
                </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}