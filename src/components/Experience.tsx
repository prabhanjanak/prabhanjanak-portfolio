import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      company: 'PerigoAI',
      position: 'AI Engineer Intern',
      location: 'On-site',
      duration: 'Feb 2025 – Present',
      description: 'Working on cutting-edge AI solutions and machine learning models for real-world applications.',
      achievements: [
        'Developing advanced computer vision algorithms',
        'Implementing deep learning models for production',
        'Collaborating with cross-functional teams on AI projects'
      ]
    },
    {
      company: 'ResoluteAI',
      position: 'AI Engineer Intern',
      location: 'Remote',
      duration: 'Aug 2024 – May 2025',
      description: 'Contributed to AI research and development projects, focusing on machine learning and data science.',
      achievements: [
        'Built and deployed ML models for data analysis',
        'Optimized algorithms for better performance',
        'Participated in research publications and technical documentation'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index !== experiences.length - 1 ? 'pb-12' : ''
              }`}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className={`absolute left-8 top-16 w-0.5 h-full ${
                  darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}></div>
              )}

              <div className="flex items-start">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-6">
                  <Briefcase size={24} />
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 rounded-2xl backdrop-blur-md border ${
                  darkMode
                    ? 'bg-gray-900/30 border-gray-700/50'
                    : 'bg-white/30 border-white/50'
                } shadow-xl`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.position}
                      </h3>
                      <p className={`text-lg font-semibold ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className={`flex items-center gap-2 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className={`flex items-start gap-3 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;