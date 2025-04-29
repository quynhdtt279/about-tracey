import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsBriefcase, BsChevronDown } from 'react-icons/bs';

const roles = [
  {
    title: 'Instructor – UI/UX Design & Relational Database',
    company: 'Aptech Vietnam',
    period: '2024 – Present',
    color: 'mint',
    achievements: [
      'Designed and delivered hands-on lessons in UI/UX Design and Relational Database concepts for aspiring software engineers.',
      'Combined design thinking, user psychology, and technical execution to help students craft intuitive digital experiences.',
      'Guided learners through tools like Figma, SQL, and ERD modeling with real-world applications.',
      'Fostered a collaborative classroom where curiosity, feedback, and continuous improvement are core values.',
      'Mentored students on portfolio projects, career planning, and industry best practices.'
    ]
  },
  {
    title: 'Product Owner',
    company: 'HTSC',
    period: 'Jan 2022 – May 2024',
    color: 'mint',
    achievements: [
      'Led cross-functional teams to transform insights into impactful solutions',
      'Researched market structures and business needs to shape long-term product vision',
      'Built strategic product roadmaps aligned with release goals and business outcomes',
      'Created wireframes and prototypes for testing and feedback loops',
      'Acted as a bridge between product and technical teams to clarify and refine features'
    ]
  },
  {
    title: 'Team Leader',
    company: 'Smartlog',
    period: 'May 2021 – Dec 2021',
    color: 'coral',
    achievements: [
      'Guided project execution and stakeholder collaboration for logistics solutions',
      'Gathered and analyzed business requirements with sharp attention to detail',
      'Managed scope, schedules, and team capacity to deliver on time and within budget',
      'Oversaw parallel processing implementation with the engineering team'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Toshiba',
    period: 'Oct 2018 – Oct 2020',
    color: 'cosmic',
    achievements: [
      'Engineered high-performance data systems with a focus on integrity and speed',
      'Reduced manual data entry by 15% through robust data testing',
      'Owned the full development lifecycle: coding, testing, deploying',
      'Built secure, scalable backend systems for real-time processing of massive datasets'
    ]
  },
  {
    title: 'Business Analyst cum Data Analyst',
    company: 'FPT University',
    period: 'Apr 2018 – Sept 2018',
    color: 'solar',
    achievements: [
      'Used data to uncover stories and solve institutional challenges',
      'Interviewed users and proposed digital admission strategies that cut effort by 80%',
      'Explored NLP models to boost AI model confidence above 90%',
      'Prepped raw data through careful cleaning and labeling for analysis and model training'
    ]
  }
];

const WorkExperience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const toggleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section id="work" className="py-10 sm:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cosmic mb-3">
              Work Experience
            </h2>
            <p className="text-cosmic/70 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
              Building products that matter, one role at a time
            </p>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <motion.div
          className="space-y-3 sm:space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-xl overflow-hidden bg-pearl shadow-sm hover:shadow-md transition-shadow duration-300 border border-${role.color}/10`}
            >
              {/* Role Header */}
              <motion.button
                onClick={() => toggleExpand(index)}
                className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 focus:outline-none focus:ring-2 focus:ring-cosmic/20 focus:ring-offset-2 focus:ring-offset-pearl rounded-xl"
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`p-2 rounded-lg bg-${role.color}/10`}>
                        <BsBriefcase className={`w-4 h-4 text-${role.color}`} />
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl text-cosmic truncate">
                        {role.title}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-cosmic/70">
                      <span className="font-bold">{role.company}</span>
                      <span className="hidden sm:block text-cosmic/40">•</span>
                      <span className="font-medium text-cosmic/60">{role.period}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 p-1 rounded-full bg-${role.color}/5`}
                  >
                    <BsChevronDown className={`w-4 h-4 text-${role.color}`} />
                  </motion.div>
                </div>
              </motion.button>

              {/* Role Details */}
              <AnimatePresence initial={false}>
                {expandedId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className={`px-4 sm:px-6 pb-4 sm:pb-5 pt-1 border-t border-${role.color}/5`}>
                      <ul className="space-y-2 text-cosmic/80">
                        {role.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full bg-${role.color} mt-2 flex-shrink-0`} />
                            <span className="text-sm sm:text-base leading-relaxed font-medium">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
