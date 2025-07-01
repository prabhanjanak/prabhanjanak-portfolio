import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Shield, Database, Wrench } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript']
    },
    {
      icon: Brain,
      title: 'AI/ML Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'YOLOv5', 'Hugging Face', 'OpenCV']
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['React', 'Node.js', 'Next.js', 'HTML/CSS', 'REST APIs']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      skills: ['Cisco Packet Tracer', 'RSAT', 'Network Security', 'Ethical Hacking']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'VectorDB', 'Firebase', 'Supabase', 'PostgreSQL']
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'OCI', 'Linux', 'Jupyter']
    }
  ];

  return (
    <section id="skills" className="py-20">
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            A comprehensive toolkit for building intelligent, secure, and scalable systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
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
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                  <category.icon size={24} />
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode
                        ? 'bg-gray-800/50 text-gray-300'
                        : 'bg-white/50 text-gray-700'
                    } border ${
                      darkMode ? 'border-gray-600/30' : 'border-gray-300/30'
                    } hover:border-blue-400/50 transition-colors duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;