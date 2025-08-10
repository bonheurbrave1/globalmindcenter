import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'react-feather';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Global Mind Center</h3>
            <p className="mb-4">
              Empowering Project Leaders for a Global Future through world-class project management training and certification.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/course" className="hover:text-primary transition-colors">PMP Course</a></li>
              <li><a href="/enroll" className="hover:text-primary transition-colors">Enrollment</a></li>
              <li><a href="/resources" className="hover:text-primary transition-colors">Resources</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span> <a href="mailto:info@globalmindcenter.com">info@globalmindcenter.com</a></span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>0788330905</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Remera, Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Global Mind Center. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
