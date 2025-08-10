import { motion } from 'framer-motion';
import MissionVisionSection from '../components/MissionVisionSection';
import TestimonialSlider from '../components/TestimonialSlider';
import image from "../assets/homeimage.jpg"
export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Global Mind Center</h1>
            <img src={image} alt="no internet connections" />
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Global Mind Center is a premier professional training institution dedicated to empowering individuals and organizations with world-class project management knowledge and skills. Based in Kigali, Rwanda, we serve clients across East Africa and beyond.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Approach</h2>
              <p className="text-gray-600 mb-4">
                We combine theoretical knowledge with practical application, ensuring our students can immediately implement what they learn in their professional environments. Our instructors are seasoned professionals with extensive real-world experience in project management across various industries.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Choose Us?</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>PMI-approved course content aligned with the latest PMBOK® Guide</li>
                <li>Flexible learning options (in-person and online)</li>
                <li>Small class sizes for personalized attention</li>
                <li>Practical, real-world case studies and exercises</li>
                <li>Comprehensive exam preparation support</li>
                <li>Post-course mentoring and career guidance</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <MissionVisionSection />
        <TestimonialSlider />
      </div>
    </div>
  );
}