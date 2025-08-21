import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'react-feather';
import { FiCalendar } from 'react-icons/fi';
import logo from "../assets/logo.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'What We Do',
    subLinks: [
      { 
        name: 'Customized Training',
        items: [
          { name: 'Project Finance', path: '/project-finance' },
          { name: 'Leadership Training', path: '/leadership-training' },
          { name: 'Data Analysis', path: '/data-analysis' }
        ]
      },
      { 
        name: 'Professional Certification',
        items: [
          { name: 'Project management professional (PMP) certification by PMI', path: '/pmp-certification' },
          { name: 'Professional Business analysis (PBA)', path: '/pba-certification' },
          { name: 'Agile Certified Practitioner Certificate (ACP)', path: '/acp-certification' },
          { name: 'PMI Risk Management Professional PMI-RMP®', path: '/risk-management-certification' }
        ]
      },
      { 
        name: 'On-Job Training',
        items: [
          { name: 'Microsoft Project', path: '/microsoft-project-training' },
          { name: 'Fundamentals of Project Management', path: '/project-management-fundamentals' },
          { name: 'Team Building', path: '/team-building' }
        ]
      }
    ]
  },
  { name: 'PMP Course', path: '/course' },
  { name: 'Enroll', target: "__blank", path: 'https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

export default function AnimatedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dropdownRef = useRef(null);

  const baseLinkClass = "text-gray-700 hover:text-primary transition-colors font-medium";
  const activeLinkClass = "border-b-2 border-black";

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsOpen(false);
  };

  // Calculate header position based on screen size
  const headerTop = isMobile ? 'top-[45px]' : 'top-[70px]';

  return (
    <>
      {/* Session Banner - Responsive height */}
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center bg-gradient-to-r from-blue-600 to-blue-800 ${isMobile ? 'py-1' : 'py-2'} px-4`}>
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-[1px] shadow-lg hover:shadow-xl transition duration-300 ease-out max-w-full">
          <span className="relative flex flex-col sm:flex-row items-center gap-1 sm:gap-2 rounded-full bg-white px-3 sm:px-6 py-1 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
            <FiCalendar className="text-sm sm:text-lg" />
            <span className="text-center">
              {isMobile ? '25 Aug - 23 Sep 2025' : 'Join the Global Mind Center — 25 Aug, 2025 to 23 Sep, 2025'}
            </span>
            <a
              href="https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0 sm:ml-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-3 py-1 text-white text-xs font-bold shadow-sm hover:from-indigo-600 hover:to-pink-600 transition"
            >
              Enroll Now
            </a>
          </span>
        </button>
      </div>

      {/* Header - position adjusts based on screen size */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed ${headerTop} left-0 w-full z-40 bg-white shadow-md`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center"
            onClick={closeAllDropdowns}
          >
            <img
              src={logo}
              alt="Global Mind Center Logo"
              className={`${isMobile ? 'w-20 h-8' : 'w-28 h-12'} object-contain mr-3`}
            />
            <span className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold`}>Global Mind Center</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" ref={dropdownRef}>
            {navLinks.map((link, index) => {
              if (link.subLinks) {
                return (
                  <div key={link.name} className="relative">
                    <button 
                      className={`${baseLinkClass} flex items-center gap-1 ${openDropdown === index ? activeLinkClass : ''}`}
                      onClick={() => toggleDropdown(index)}
                    >
                      {link.name}
                      {openDropdown === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed left-0 right-0 mt-2 bg-white shadow-lg py-8 z-50 border-t border-gray-100"
                      >
                        <div className="container mx-auto px-8">
                          <div className="flex justify-between gap-12">
                            {link.subLinks.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="flex-1 max-w-xs">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-lime-500">{section.name}</h3>
                                <ul className="space-y-3">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <NavLink
                                        to={item.path}
                                        className="text-gray-600 hover:text-lime-600 transition-colors block py-1.5"
                                        onClick={closeAllDropdowns}
                                      >
                                        {item.name}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  target={link.target}
                  to={link.path}
                  className={({ isActive }) =>
                    `${baseLinkClass} ${isActive ? activeLinkClass : ''}`
                  }
                  onClick={closeAllDropdowns}
                >
                  {link.name}
                </NavLink>
              );
            })}
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
              {navLinks.map((link) => {
                if (link.subLinks) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button 
                        className="py-2 text-gray-700 hover:text-primary transition-colors flex items-center justify-between"
                        onClick={() => toggleDropdown(navLinks.indexOf(link))}
                      >
                        {link.name}
                        {openDropdown === navLinks.indexOf(link) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openDropdown === navLinks.indexOf(link) && (
                        <div className="pl-4">
                          {link.subLinks.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mt-4">
                              <h4 className="font-medium text-gray-900">{section.name}</h4>
                              <ul className="pl-4 mt-2 space-y-2">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <NavLink
                                      to={item.path}
                                      className="text-gray-600 hover:text-primary transition-colors"
                                      onClick={closeAllDropdowns}
                                    >
                                      {item.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    target={link.target}
                    className={({ isActive }) =>
                      `py-2 text-gray-700 hover:text-primary transition-colors ${isActive ? activeLinkClass : ''}`
                    }
                    onClick={closeAllDropdowns}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Padding for banner + header - adjusts based on screen size */}
      <div className={isMobile ? "pt-[120px]" : "pt-[150px]"}></div>
    </>
  );
}