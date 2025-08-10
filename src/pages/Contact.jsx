import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'react-feather';

export default function Contact() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Address</h3>
                      <p className="text-gray-600">Near Amahoro Stadium, 2nd Floor, 24V8+864 Gilugali House, KG 11 Ave, Kigali, Rwanda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <a href="mailto:info@globalmindcenter.com">
                      <p className="text-gray-600">info@globalmindcenter.com</p>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <p className="text-gray-600">0788330905</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Working Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Send Us a Message</h2>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center"
                  >
                    <MessageSquare className="mr-2" size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}