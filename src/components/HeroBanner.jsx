import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 backgroundSection bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Updated: Added Certification Badge at the top */}
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
              PMP®
            </div>
            <span className="text-sm font-medium text-white/90">
              Project Management Professional Certification
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Project Management Professional (PMP®) Certification
          </h1>
          
          <p className="text-xl mb-8">
            Advance your career with PMP® certification from Global Mind Center. 
            Gain the skills and recognition to lead successful projects worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/enroll"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition-colors text-center"
            >
              Enroll Now
            </Link>
            <Link
              to="/course"
              className="border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}