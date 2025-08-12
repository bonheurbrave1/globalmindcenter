import { motion } from "framer-motion";

export default function Course() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1581091870622-1c8a1a6c3b1a?auto=format&fit=crop&w=1470&q=80"
          alt="PMP Certification"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-bold text-center"
          >
            Master Project Management with PMP Certification
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="p-8 md:p-12">
            {/* Course Description */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
                <p className="text-gray-700 mb-4">
                  This PMP certification course equips you with essential project management skills
                  based on the PMBOK® Guide, preparing you for successful project delivery across industries.
                </p>
                <p className="text-gray-700">
                  Learn integration, scope, schedule, cost, quality, resources, communication, risk,
                  procurement, and stakeholder management with real-world case studies & exam prep strategies.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=870&q=80"
                alt="Course Overview"
                className="rounded-lg shadow-md"
              />
            </motion.div>

            <hr className="my-10 border-gray-200" />

            {/* Why PMP */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?auto=format&fit=crop&w=870&q=80"
                alt="PMP Benefits"
                className="rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Why Pursue the PMP Certification?</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>16% Higher Salary:</strong> Boost your earning potential.</li>
                  <li><strong>Global Recognition:</strong> Work internationally.</li>
                  <li><strong>Career Advancement:</strong> Open doors to leadership roles.</li>
                  <li><strong>Industry Demand:</strong> Employers value PMP-certified talent.</li>
                </ul>
              </div>
            </motion.div>

            <hr className="my-10 border-gray-200" />

            {/* Target Audience */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">Target Audience</h2>
                <p className="text-gray-700">
                  Perfect for project managers, team leaders, and professionals seeking to validate
                  their expertise and boost their careers with a globally recognized credential.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=870&q=80"
                alt="Target Audience"
                className="rounded-lg shadow-md"
              />
            </motion.div>

            <hr className="my-10 border-gray-200" />

            {/* Certification */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <img
                src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=870&q=80"
                alt="Certification"
                className="rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Certification</h2>
                <p className="text-gray-700">
                  Upon course completion and passing the exam, you’ll earn the PMP certification from PMI,
                  opening global career opportunities and validating your skills.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
