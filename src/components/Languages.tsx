import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguagesProps {
  darkMode: boolean;
}

const Languages: React.FC<LanguagesProps> = ({ darkMode }) => {
  const languages = [
    {
      language: 'Kannada',
      level: 'Native',
      flag: '🇮🇳'
    },
    {
      language: 'English',
      level: 'Fluent',
      flag: '🇬🇧'
    },
    {
      language: 'Hindi',
      level: 'Professional',
      flag: '🇮🇳'
    }
  ];

  return (
    <section id="languages" className="py-20">
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
            Languages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl backdrop-blur-md border ${
                darkMode
                  ? 'bg-gray-900/30 border-gray-700/50'
                  : 'bg-white/30 border-white/50'
              } shadow-xl hover:shadow-2xl transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-4">{lang.flag}</div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {lang.language}
              </h3>
              <p className={`font-semibold ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {lang.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;