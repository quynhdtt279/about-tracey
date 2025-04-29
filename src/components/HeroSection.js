import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section id="hero" className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pt-8 sm:pb-16 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-mint/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-coral/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Main content */}
        <motion.div 
          className="space-y-3 sm:space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cosmic leading-tight">
            <motion.div variants={itemVariants} className="mb-1 sm:mb-2">
              Hi, I'm <span className="text-coral">Quỳnh</span>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl">
              — or <span className="text-coral">Tracey</span> if that feels closer.
            </motion.div>
            <motion.div 
              variants={itemVariants} 
              className="mt-3 sm:mt-4 mb-2 sm:mb-3 py-1 sm:py-2 pl-3 sm:pl-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-cosmic-pulse"
            >
              I bridge intuition, strategy, and soul to design meaningful impact.
            </motion.div>
          </h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-cosmic/70 max-w-2xl"
          >
            Product Owner & Software Engineer with a passion for creating intuitive, impactful solutions that bridge technology and human needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-cosmic text-pearl hover:bg-cosmic/90 transition-colors duration-200"
            >
              Let's Connect
            </a>
            <a 
              href="#work" 
              className="inline-flex items-center px-6 py-3 rounded-xl border border-cosmic/20 text-cosmic hover:bg-cosmic/5 transition-colors duration-200"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
