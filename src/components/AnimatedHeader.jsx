import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { FiCalendar } from 'react-icons/fi';
import logo from "../assets/logo.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'PMP Course', path: '/course' },
  { name: 'Enroll', target: "__blank", path: 'https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

export default function AnimatedHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinkClass = "text-gray-700 hover:text-primary transition-colors font-medium";
  const activeLinkClass = "border-b-2 border-black";

  return (
    <>
      {/* Session Banner - Modernized */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-4">
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-[2px] shadow-lg hover:shadow-xl transition duration-300 ease-out">
          <span className="relative flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
            <FiCalendar className="text-lg" />
            Join the Global Mind Center — 25 Aug, 2025 to 23 Sep, 2025
            <a
              href="https://docs.google.com/forms/d/1YY29tM4r8NT3GHT5qcAuIn7jWZmn4Scxl76ysUE_CzM/edit"
              target="__blank"
              className="ml-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-1 text-white text-xs font-bold shadow-sm hover:from-indigo-600 hover:to-pink-600 transition"
            >
              Enroll Now
            </a>
          </span>
        </button>
      </div>

      {/* Header - shifted down to avoid banner overlap */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-[70px] left-0 w-full z-40 bg-white shadow-md"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
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
            {navLinks.map(({ name, target, path }) => (
              <NavLink
                key={name}
                target={target}
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

      {/* Padding for banner + header */}
      <div className="pt-[150px]"></div>
    </>
  );
}
