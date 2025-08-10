import { motion } from 'framer-motion';

export default function Course() {
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">PMP Certification Course</h1>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Course Description</h2>
              <p className="text-gray-600 mb-4">
                The PMP certification course is designed to equip project managers and aspiring professionals with the essential knowledge, skills, and tools required to effectively lead and manage projects across various industries. This comprehensive training covers the five process groups and ten knowledge areas defined by the Project Management Institute (PMI) in the PMBOK® Guide, providing a solid foundation for successful project delivery.
              </p>
              <p className="text-gray-600 mb-4">
                Participants will learn best practices in project integration, scope, schedule, cost, quality, resource, communication, risk, procurement, and stakeholder management. The course also emphasizes real-world application through case studies, interactive exercises, and exam-focused strategies to prepare candidates for the PMP certification exam.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Pursue the PMP Certification?</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Earning Potential:</strong> PMP certified professionals earn about 16% more each year than their non-certified counterparts.</li>
                <li><strong>Skill Validation:</strong> Validates your project management skills and expertise.</li>
                <li><strong>Global recognition:</strong> Opens doors to opportunities in different countries and enables you to work on international projects.</li>
                <li><strong>Network Access:</strong> Join a network of skilled project management professionals.</li>
                <li><strong>Career Advancement:</strong> Increase your market value and enjoy exciting career opportunities.</li>
                <li><strong>Industry Demand:</strong> Employers are increasingly seeking candidates with recognized credentials.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Target Audience</h2>
              <p className="text-gray-600 mb-4">
                This course is ideal for project managers, team leaders, and professionals aiming to validate their project management expertise and advance their careers with globally recognized credentials.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Certification</h2>
              <p className="text-gray-600">
                Upon successful completion of the course and passing the PMP exam, you will receive the prestigious PMP certification from the Project Management Institute (PMI), recognized worldwide.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}