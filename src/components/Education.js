import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';

const education = [
  {
    degree: "Engineer's in Software Engineering",
    institution: 'FPT University',
    year: '2018',
    awards: 'Best Student of Software Engineering, GPA: 8.16/10',
    highlight: true
  },
  {
    degree: 'High School Diploma',
    institution: 'Nguyen Hue High School for the Gifted',
    year: '2014',
    specialization: 'Chemistry'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-pearl/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cosmic mb-2 sm:mb-3">
            Education
          </h2>
          <p className="text-cosmic/70 text-base sm:text-lg max-w-xl mx-auto">
            Academic background and achievements
          </p>
        </motion.div>

        {/* Education Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 sm:gap-6"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-sm transition-shadow duration-300 ${
                item.highlight 
                  ? 'bg-gradient-to-br from-cosmic/[0.03] to-mint/[0.03] shadow-xs' 
                  : 'bg-pearl/50'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                {/* Left Column */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${
                    item.highlight 
                      ? 'bg-gradient-to-br from-cosmic/[0.08] to-mint/[0.08]' 
                      : 'bg-cosmic/[0.03]'
                  }`}>
                    <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-cosmic/70" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-cosmic text-base sm:text-lg truncate">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 sm:mt-1 text-cosmic/70">
                      <FaUniversity className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base truncate">{item.institution}</span>
                    </div>
                    {item.awards && (
                      <div className="flex items-center gap-2 mt-1 text-cosmic/70">
                        <FaAward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral/70 flex-shrink-0" />
                        <span className="text-xs sm:text-sm line-clamp-1">{item.awards}</span>
                      </div>
                    )}
                    {item.specialization && (
                      <span className="text-xs sm:text-sm text-cosmic/60 mt-0.5 sm:mt-1 block line-clamp-1">
                        {item.specialization}
                      </span>
                    )}
                  </div>
                </div>
                {/* Right Column */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-cosmic/60 sm:text-right mt-1 sm:mt-0">
                  <BiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base whitespace-nowrap">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
