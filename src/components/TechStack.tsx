import React from 'react';
import { motion } from 'framer-motion';

interface TechStackProps {
  darkMode: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ darkMode }) => {
  const technologies = [
    { name: 'Python', logo: '🐍' },
    { name: 'React', logo: '⚛️' },
    { name: 'PyTorch', logo: '🔥' },
    { name: 'TensorFlow', logo: '🧠' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Docker', logo: '🐳' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Git', logo: '📝' },
    { name: 'Linux', logo: '🐧' },
    { name: 'Blockchain', logo: '⛓️' },
    { name: 'Cybersecurity', logo: '🔒' }
  ];

  return (
    <section id="tech-stack" className="py-20">
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
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`p-4 rounded-xl backdrop-blur-md border ${
                  darkMode
                    ? 'bg-gray-900/30 border-gray-700/50'
                    : 'bg-white/30 border-white/50'
                } shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
              >
                <div className="text-3xl mb-2">{tech.logo}</div>
                <p className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;