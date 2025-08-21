import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'react-feather';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-300">Global Mind Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for course inquiries, enrollment, or any questions
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Contact Info Section */}
            <div className="bg-blue-50 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageSquare className="mr-3 text-blue-300" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-blue-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-700">
                      Near Amahoro Stadium, 2nd Floor, 24V8+864 Gilugali House, KG 11 Ave, Kigali, Rwanda
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-300 hover:underline text-sm font-medium"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-blue-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@globalmindcenter.com" 
                      className="text-gray-700 hover:text-blue-300 transition-colors"
                    >
                      info@globalmindcenter.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-blue-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a 
                      href="tel:+250788330905" 
                      className="text-gray-700 hover:text-blue-300 transition-colors"
                    >
                      +250 788 330 905
                    </a>
                    <div className="mt-2 flex space-x-4">
                      <a 
                        href="https://wa.me/250788330905" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 text-xl"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-blue-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com/globalmindcenter" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-sm text-blue-300 hover:bg-blue-50 transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com/globalmindcenter" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-sm text-blue-400 hover:bg-blue-50 transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/globalmindcenter" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-sm text-blue-700 hover:bg-blue-50 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-300 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2" size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="h-96 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.490006193786!2d30.0913153152638!3d-1.9467755370210055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnNDguNCJTIDMwwrAwNSczNi4xIkU!5e0!3m2!1sen!2srw!4v1620000000000!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Global Mind Center Location"
            ></iframe>
          </div>
          <div className="p-6 text-center bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-600">Near Amahoro Stadium, 2nd Floor, Gilugali House, KG 11 Ave, Kigali</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-300 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your PMP Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your training needs or enroll in our next session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+250788330905" 
              className="bg-white text-blue-300 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Call Now
            </a>
            <a 
              href="mailto:info@globalmindcenter.com" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-all"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}