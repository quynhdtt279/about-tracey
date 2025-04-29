import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', text: 'Work' },
    { href: '#education', text: 'Education' },
    { href: '#insights', text: 'Insights' },
    { href: '#gallery', text: 'Gallery' },
    { href: '#contact', text: 'Contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-pearl/95 backdrop-blur-sm shadow-sm' : 'bg-pearl/50'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-cosmic hover:text-coral transition-colors duration-300"
              onClick={handleLinkClick}
            >
              <span className="text-lg sm:text-xl font-bold tracking-tight">Quỳnh|Tracey</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6 lg:space-x-8">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-cosmic/80 hover:text-coral transition-colors duration-300 px-2 py-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.text}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-cosmic hover:text-coral transition-colors duration-300 p-2 -mr-2"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sm:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-3 space-y-1 border-t border-cosmic/10">
                {navLinks.map(link => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block px-1 py-3 text-cosmic/80 hover:text-coral transition-colors duration-300"
                    onClick={handleLinkClick}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
