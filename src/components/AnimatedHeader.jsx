import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { FiCalendar } from 'react-icons/fi'; // Added for the calendar icon
import logo from "../assets/logo.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'PMP Course', path: '/course' },
  { name: 'Enroll', path: '/enroll' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

export default function AnimatedHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinkClass = "text-gray-700 hover:text-primary transition-colors font-medium";
  const activeLinkClass = "border-b-2 border-black";

  return (
    <>
      {/* Session Banner - Added above the header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 py-1.5 text-center text-white text-sm font-medium">
          <div className="flex items-center justify-center">
            <FiCalendar className="mr-2" />
            <span>Enroll now for August 25th - September 23rd session! <a href="https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit" target='__blank' className='bg-orange-500 text-white px-2'>Enroll now</a></span>
          </div>
        </div>
      </div>

      {/* Header - Adjusted to account for banner */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-8 left-0 w-full z-40 bg-white shadow-md" // Changed z-index to 40
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Global Mind Center Logo"
              className="w-28 h-12 object-contain mr-3"
            />
            <span className="ml-0 text-xl font-semibold">Global Mind Center</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ name, path }) => (
              <NavLink 
                key={name}
                to={path}
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : ''}`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-4 pb-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) =>
                    `py-2 text-gray-700 hover:text-primary transition-colors ${isActive ? activeLinkClass : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Adjusted padding to account for both banner and header */}
      <div className="pt-32"></div> {/* Increased from pt-24 to pt-32 */}
    </>
  );
}