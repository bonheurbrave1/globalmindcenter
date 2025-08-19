import { motion } from 'framer-motion';
import MissionVisionSection from '../components/MissionVisionSection';
import TestimonialSlider from '../components/TestimonialSlider';
import pmilogo from '../assets/pmilogo.png';
import { TiTick } from 'react-icons/ti';
import { FaLinkedin, FaTwitter, FaFacebook, FaGlobeAfrica, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
import image from "../assets/homeimage.jpg";
import pamela from "../assets/pamella.jpeg"
import katumba from "../assets/katumba.jpeg"
import anelson from "../assets/anelson.jpeg"
const trainers = [
  {
    role: "Project Management Consultant | Leadership Development Specialist | MBA Lecturer | Certified Coach",
    name: "James Katumba",
    degrees: "MSc. PMP®, PBA®, ACP®,",
    social: {
      linkedin: "https://linkedin.com/in/robertrunazi",
      twitter: "https://twitter.com/robertrunazi",
      facebook: "https://facebook.com/robertrunazi",
    },
    bio: `James Katumba is a seasoned Project Management Consultant, Leadership Development Specialist, and John C. Maxwell Certified Coach with over five years of experience in training and consultancy. He supports organizations across Uganda and Kigali in capacity building, leadership development, and strategic execution. James has facilitated PMP® and CAPM® prep programs with PMI ATPs like MAT Abacus, Agile Masters, and Crosslinks, empowering hundreds of learners. As a lecturer in Heriot-Watt University’s MBA program, he guides students through project governance and stakeholder engagement. His coaching, grounded in trust and accountability, helps teams unlock potential and align with purpose. James brings clarity, strategy, and practical tools to every engagement`,
    image: katumba,
  },
  {
    role: "facilitators for the September Cohort. ",
    name: "Pamela Nabisaalu",
    degrees: "MSc. PMP®, PBA®, ACP®,",
    social: {
      linkedin: "https://linkedin.com/in/robertrunazi",
      twitter: "https://twitter.com/robertrunazi",
      facebook: "https://facebook.com/robertrunazi",
    },
    bio: `Pamela Nabisaalu is a Uganda-based Project Management Consultant with over five years of experience guiding project teams across sectors. He has managed and supported the delivery of 60+ high-impact projects worth over $1 billion, navigating complex stakeholder ecosystems with strategic coordination and adaptive leadership. James is also a Change Management Expert, known for driving organizational transformation and aligning teams with strategic goals. He holds a PMP, CSM, and MBA, enabling him to operate effectively in both agile and traditional project environments. As co-founder of Ascend Professionals Limited, he leads efforts in project training and delivery. His work focuses on empowering individuals and organizations with practical, results-driven solutions`,
    image: pamela,
  },
];

export default function About() {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 lg:p-14">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                  <FaGlobeAfrica size={24} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  About <span className="text-blue-600">Global Mind Center</span>
                </h1>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg">
                  We are a <span className="font-semibold text-blue-600">premier professional training institution</span> dedicated to empowering individuals and organizations with world-class project management knowledge. Based in Kigali, Rwanda, we serve clients across East Africa and beyond.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <FaChalkboardTeacher className="mr-2 text-blue-600" />
                    Our Approach
                  </h2>
                  <p>
                    We combine <span className="font-medium">theoretical knowledge</span> with <span className="font-medium">practical application</span>, ensuring immediate implementation in professional environments. Our instructors are seasoned professionals with extensive real-world experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-64 lg:min-h-96">
              <img
                src={image}
                alt="Global Mind Center"
                className="absolute inset-0 w-full h-full object-cover rounded-r-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start">
                      <TiTick className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Strategic Planning & Execution
                    </li>
                    <li className="flex items-start">
                      <TiTick className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Project Leadership & Governance
                    </li>
                    <li className="flex items-start">
                      <TiTick className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Organisational Learning & Culture Design
                    </li>
                    <li className="flex items-start">
                      <TiTick className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Team Synergy & Performance Coaching
                    </li>
                    <li className="flex items-start">
                      <TiTick className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Post-course mentoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Trainers Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Expert Trainer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from certified professionals with real-world experience
            </p>
          </motion.div>

          {trainers.map(({ role, name, degrees, social, bio, image }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Trainer Profile */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-white flex flex-col items-center text-center lg:text-left">
                  <div className="relative mb-6">
                    <img
                      src={image}
                      alt={name}
                      className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2 rounded-full">
                      <FaUserTie size={20} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
                  <p className="text-blue-700 font-medium mb-2">{degrees}</p>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-6">{role}</p>
                  
                  <div className="flex space-x-4 text-blue-600 text-xl mb-6">
                    {social.linkedin && (
                      <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition transform hover:scale-110">
                        <FaLinkedin />
                      </a>
                    )}
                    {social.twitter && (
                      <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition transform hover:scale-110">
                        <FaTwitter />
                      </a>
                    )}
                    {social.facebook && (
                      <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition transform hover:scale-110">
                        <FaFacebook />
                      </a>
                    )}
                  </div>
                  
                  {/* PMI Badge - Mobile First */}
                  <div className="lg:hidden bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center w-full max-w-xs">
                    <img src={pmilogo} alt="PMI Logo" className="w-14 h-auto mb-2" />
                    <div className="flex items-center text-sm text-green-600 mb-1 font-medium">
                      <span>Verified</span>
                      <TiTick className="ml-1 bg-green-600 rounded text-white" />
                    </div>
                    <p className="text-xs text-gray-500 mb-2">Authorized Training Partner</p>
                    <button className="text-xs px-3 py-1 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                      Verify Badge
                    </button>
                  </div>
                </div>

                {/* Trainer Bio + PMI Badge (Desktop) */}
                <div className="lg:col-span-2 p-8 relative">
                  {/* PMI Badge - Desktop */}
                  <div className="hidden lg:block absolute top-8 right-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center w-32">
                    <img src={pmilogo} alt="PMI Logo" className="w-12 h-auto mb-2" />
                    <div className="flex items-center text-xs text-green-600 mb-1 font-medium">
                      <span>Verified</span>
                      <TiTick className="ml-1 bg-green-600 rounded text-white px-0.5" />
                    </div>
                    <p className="text-[10px] text-gray-500 mb-2 text-center">Authorized Training Partner</p>
                    <button className="text-xs px-2 py-1 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                      Verify
                    </button>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Profile</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-3">Key Expertise:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Project Management', 'Business Analysis', 'Financial Strategy', 'Corporate Training'].map((skill, i) => (
                        <div key={i} className="flex items-start">
                          <TiTick className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <MissionVisionSection />
        <TestimonialSlider />
      </div>
    </div>
  );
}