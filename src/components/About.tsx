import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Shield, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Deep Learning, Computer Vision, and Neural Networks'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'React, Node.js, Python, and modern web technologies'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Network security, ethical hacking, and secure systems'
    },
    {
      icon: Zap,
      title: 'Web3 Innovation',
      description: 'Blockchain, smart contracts, and decentralized systems'
    }
  ];

  return (
    <section id="about" className="py-20">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-2xl backdrop-blur-md border ${
              darkMode
                ? 'bg-gray-900/30 border-gray-700/50'
                : 'bg-white/30 border-white/50'
            } shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              My Journey
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a passionate AI/ML Engineer currently pursuing my Bachelor's in Artificial Intelligence and Machine Learning at PESITM Shivamogga. My journey in technology began with a curiosity about how machines can learn and make decisions, which has evolved into a deep expertise in creating intelligent systems that solve real-world problems.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Through internships at ResoluteAI and PerigoAI, I've gained hands-on experience in developing cutting-edge AI solutions, from medical imaging applications to blockchain-based peer review systems. I believe in the power of technology to create positive impact and am constantly exploring new frontiers in AI, cybersecurity, and Web3.
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              When I'm not coding or researching, you'll find me participating in hackathons, leading tech communities, or working on open-source projects that push the boundaries of what's possible with AI and machine learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl backdrop-blur-md border ${
                  darkMode
                    ? 'bg-gray-800/30 border-gray-600/50'
                    : 'bg-white/50 border-white/70'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                    <highlight.icon size={24} />
                  </div>
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;