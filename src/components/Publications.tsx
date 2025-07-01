import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

interface PublicationsProps {
  darkMode: boolean;
}

const Publications: React.FC<PublicationsProps> = ({ darkMode }) => {
  const publications = [
    {
      title: 'Graph Neural Networks for Scene Understanding',
      publisher: 'Springer',
      status: 'Submitted',
      description: 'Research on applying graph neural networks to improve scene understanding in computer vision applications.',
      link: '#'
    },
    {
      title: 'Integrating LLMs into Academic Research',
      publisher: 'Cambridge Scholars',
      status: 'Under Review',
      description: 'Comprehensive study on the integration of Large Language Models in academic research workflows and methodologies.',
      link: '#'
    }
  ];

  return (
    <section id="publications" className="py-20">
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
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl backdrop-blur-md border ${
                darkMode
                  ? 'bg-gray-900/30 border-gray-700/50'
                  : 'bg-white/30 border-white/50'
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {pub.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-3">
                      <p className={`font-semibold ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {pub.publisher}
                      </p>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        pub.status === 'Submitted'
                          ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        {pub.status}
                      </span>
                    </div>
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {pub.description}
                    </p>
                  </div>
                </div>
                <motion.a
                  href={pub.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700/50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-200/50'
                  }`}
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;