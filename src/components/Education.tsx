import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Artificial Intelligence and Machine Learning',
      institution: 'PESITM Shivamogga',
      duration: '2021 – 2025',
      cgpa: '8.4',
      description: 'Specialized in AI/ML with focus on computer vision, deep learning, and intelligent systems.'
    },
    {
      degree: '12th Grade (Pre-University)',
      institution: 'PU College',
      duration: '2019 – 2021',
      cgpa: '73.33%',
      description: 'Science stream with Mathematics, Physics, Chemistry, and Computer Science.'
    },
    {
      degree: '10th Grade (SSLC)',
      institution: 'High School',
      duration: '2018 – 2019',
      cgpa: '78.24%',
      description: 'Completed secondary education with strong foundation in mathematics and sciences.'
    }
  ];

  return (
    <section id="education" className="py-20">
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index !== education.length - 1 ? 'pb-12' : ''
              }`}
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className={`absolute left-8 top-16 w-0.5 h-full ${
                  darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}></div>
              )}

              <div className="flex items-start">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-6">
                  <GraduationCap size={24} />
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 rounded-2xl backdrop-blur-md border ${
                  darkMode
                    ? 'bg-gray-900/30 border-gray-700/50'
                    : 'bg-white/30 border-white/50'
                } shadow-xl`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-lg font-semibold ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className={`flex items-center gap-2 text-sm mb-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        darkMode
                          ? 'bg-green-900/30 text-green-400 border border-green-700/30'
                          : 'bg-green-100 text-green-700 border border-green-200'
                      }`}>
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>

                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;