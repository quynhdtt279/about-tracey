import React from 'react';
import { motion } from 'framer-motion';
import { BiBrain, BiGitCompare, BiWorld, BiRun, BiMicrophone, BiSearch } from 'react-icons/bi';

const PersonalInsights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="insights" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cosmic mb-2 sm:mb-3">
            Personal Insights
          </h2>
          <p className="text-cosmic/70 text-base sm:text-lg max-w-2xl mx-auto">
            Exploring my interests, values, and what drives me forward
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Strengths & Weaknesses */}
          <div className="space-y-6 sm:space-y-8">
            {/* Strengths Card */}
            <motion.div
              className="bg-pearl rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="p-2 rounded-lg bg-mint/10">
                  <BiBrain className="w-5 h-5 sm:w-6 sm:h-6 text-mint" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-cosmic">Strengths</h3>
              </div>
              <p className="text-cosmic/80 text-sm sm:text-base leading-relaxed">
                I thrive on independence, often taking initiative to explore new paths and ideas. 
                My self-study habit fuels continuous learning, especially when mastering complex 
                systems or technologies. I value responsibility—owning outcomes and staying committed. 
                Above all, I apply critical thinking to approach challenges with logic, insight, 
                and creativity.
              </p>
            </motion.div>

            {/* Weaknesses Card */}
            <motion.div
              className="bg-pearl rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="p-2 rounded-lg bg-coral/10">
                  <BiGitCompare className="w-5 h-5 sm:w-6 sm:h-6 text-coral" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-cosmic">Weaknesses</h3>
              </div>
              <p className="text-cosmic/80 text-sm sm:text-base leading-relaxed">
                I'm working on managing emotions more mindfully—balancing empathy with clarity. 
                At times, my perfectionist tendencies slow progress, but I've learned to channel 
                them into producing thoughtful, high-quality work while embracing iteration.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Hobbies */}
          <motion.div
            className="bg-pearl rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 sm:mb-6">
              <div className="flex gap-2 sm:gap-3">
                <div className="p-2 rounded-lg bg-solar/10">
                  <BiWorld className="w-5 h-5 sm:w-6 sm:h-6 text-solar" />
                </div>
                <div className="p-2 rounded-lg bg-mint/10">
                  <BiRun className="w-5 h-5 sm:w-6 sm:h-6 text-mint" />
                </div>
                <div className="p-2 rounded-lg bg-coral/10">
                  <BiMicrophone className="w-5 h-5 sm:w-6 sm:h-6 text-coral" />
                </div>
                <div className="p-2 rounded-lg bg-cosmic/10">
                  <BiSearch className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cosmic">Hobbies & Interests</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-solar/10 mt-0.5">
                  <BiWorld className="w-4 h-4 sm:w-5 sm:h-5 text-solar" />
                </div>
                <p className="text-cosmic/80 text-sm sm:text-base">
                  I'm passionate about travel, not just for new sights but for new perspectives.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-mint/10 mt-0.5">
                  <BiRun className="w-4 h-4 sm:w-5 sm:h-5 text-mint" />
                </div>
                <p className="text-cosmic/80 text-sm sm:text-base">
                  Sports keep me grounded and energized.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-coral/10 mt-0.5">
                  <BiMicrophone className="w-4 h-4 sm:w-5 sm:h-5 text-coral" />
                </div>
                <p className="text-cosmic/80 text-sm sm:text-base">
                  I love giving talks, sharing knowledge, and connecting with curious minds.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cosmic/10 mt-0.5">
                  <BiSearch className="w-4 h-4 sm:w-5 sm:h-5 text-cosmic" />
                </div>
                <p className="text-cosmic/80 text-sm sm:text-base">
                  Above all, I'm on a lifelong journey to explore the purpose and meaning of life, 
                  one reflection at a time.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalInsights;
