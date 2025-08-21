import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'react-feather';
import { FiCalendar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 400);
  const dropdownRef = useRef(null);

  const baseLinkClass = "text-gray-700 hover:text-primary transition-colors font-medium";
  const activeLinkClass = "border-b-2 border-black";

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 400);
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
  const headerTop = isSmallScreen ? 'top-[38px]' : 'top-[45px]';

  return (
    <>
      {/* Session Banner - Ultra compact for small screens */}
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center bg-gradient-to-r from-blue-600 to-blue-800 ${isSmallScreen ? 'py-0' : 'py-1'} px-2`}>
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-[1px] shadow-lg hover:shadow-xl transition duration-300 ease-out max-w-full">
          <span className="relative flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-900 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
            <FiCalendar className="text-xs" />
            <span className="text-center">
              {isSmallScreen ? '25 Aug - 23 Sep' : '25 Aug - 23 Sep 2025'}
            </span>
            <a
              href="https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-2 py-0.5 text-white text-xs font-bold shadow-sm hover:from-indigo-600 hover:to-pink-600 transition"
            >
              Enroll
            </a>
          </span>
        </button>
        {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/250788330905"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 animate-bounce z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      </div>

      {/* Header - position adjusts based on screen size */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed ${headerTop} left-0 w-full z-40 bg-white shadow-md`}
      >
        <div className="container mx-auto px-3 py-2 flex justify-between items-center">
          {/* Logo - smaller on small screens */}
          <NavLink 
            to="/" 
            className="flex items-center"
            onClick={closeAllDropdowns}
          >
            <img
              src={logo}
              alt="Global Mind Center Logo"
              className={`${isSmallScreen ? 'w-16 h-6' : 'w-20 h-8'} object-contain mr-2`}
            />
            <span className={`${isSmallScreen ? 'text-sm' : 'text-lg'} font-semibold`}>
               Global Mind Center
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" ref={dropdownRef}>
            {navLinks.map((link, index) => {
              if (link.subLinks) {
                return (
                  <div key={link.name} className="relative">
                    <button 
                      className={`${baseLinkClass} flex items-center gap-1 ${openDropdown === index ? activeLinkClass : ''}`}
                      onClick={() => toggleDropdown(index)}
                    >
                      {link.name}
                      {openDropdown === index ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {openDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed left-0 right-0 mt-2 bg-white shadow-lg py-6 z-50 border-t border-gray-100"
                      >
                        <div className="container mx-auto px-6">
                          <div className="flex justify-between gap-10">
                            {link.subLinks.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="flex-1 max-w-xs">
                                <h3 className="text-base font-semibold text-gray-900 mb-3 text-lime-500">{section.name}</h3>
                                <ul className="space-y-2">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <NavLink
                                        to={item.path}
                                        className="text-gray-600 hover:text-lime-600 transition-colors block py-1"
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
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-3 pb-3"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                if (link.subLinks) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button 
                        className="py-1.5 text-gray-700 hover:text-primary transition-colors flex items-center justify-between"
                        onClick={() => toggleDropdown(navLinks.indexOf(link))}
                      >
                        {link.name}
                        {openDropdown === navLinks.indexOf(link) ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                      {openDropdown === navLinks.indexOf(link) && (
                        <div className="pl-3">
                          {link.subLinks.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mt-2">
                              <h4 className="font-medium text-gray-900 text-sm">{section.name}</h4>
                              <ul className="pl-3 mt-1 space-y-1">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <NavLink
                                      to={item.path}
                                      className="text-gray-600 hover:text-primary transition-colors text-sm"
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
                      `py-1.5 text-gray-700 hover:text-primary transition-colors ${isActive ? activeLinkClass : ''}`
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

      

      {/* Padding for banner + header - ultra compact for small screens */}
      <div className={isSmallScreen ? "pt-[100px]" : "pt-[120px]"}></div>
    </>
  );
}