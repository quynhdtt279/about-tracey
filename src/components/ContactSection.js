import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { BsTelephone, BsFacebook } from 'react-icons/bs';

const ContactSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="bg-pearl py-12 sm:py-16 px-4 sm:px-6" id="contact">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="text-center mb-8 sm:mb-12">
          {/* Headline */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-cosmic mb-3 sm:mb-4"
            variants={fadeIn}
          >
            Let's create something meaningful together.
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-cosmic/80 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Whether you're building a product, designing a future, or just want to 
            say hello — I'd love to hear from you.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
          variants={fadeIn}
        >
          {/* Contact Details */}
          <div className="space-y-4 text-center sm:text-left">
            <a 
              href="mailto:quynhdtt279@gmail.com"
              className="group flex items-center justify-center sm:justify-start gap-2 text-base sm:text-lg text-cosmic hover:text-coral transition-colors"
            >
              <MdEmail className="text-xl sm:text-2xl text-coral group-hover:scale-110 transition-transform" />
              quynhdtt279@gmail.com
            </a>
            
            <p className="flex items-center justify-center sm:justify-start gap-2 text-base sm:text-lg text-cosmic">
              <BsTelephone className="text-xl sm:text-2xl text-coral" />
              (+84) 966-343-635
            </p>
            
            <a 
              href="https://www.facebook.com/thuquynh2709/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center sm:justify-start gap-2 text-base sm:text-lg text-cosmic hover:text-coral transition-colors"
            >
              <BsFacebook className="text-xl sm:text-2xl text-coral group-hover:scale-110 transition-transform" />
              facebook.com/thuquynh2709
            </a>
          </div>

          {/* CTA Button Container */}
          <div className="flex items-center justify-center sm:justify-end">
            <motion.div variants={fadeIn}>
              <a 
                href="mailto:quynhdtt279@gmail.com"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-coral hover:bg-mint text-pearl 
                         rounded-lg transition-colors duration-300 text-base sm:text-lg font-medium
                         hover:shadow-lg hover:shadow-mint/20"
              >
                Send me a message
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
