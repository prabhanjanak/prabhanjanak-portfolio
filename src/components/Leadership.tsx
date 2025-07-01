import React from 'react';
import { motion } from 'framer-motion';
import { Users, Crown, Building, Code } from 'lucide-react';

interface LeadershipProps {
  darkMode: boolean;
}

const Leadership: React.FC<LeadershipProps> = ({ darkMode }) => {
  const roles = [
    {
      icon: Crown,
      title: 'IEEE Student Chair',
      organization: 'PESITM',
      description: 'Leading IEEE student chapter activities and organizing technical events.'
    },
    {
      icon: Code,
      title: 'Core Member',
      organization: 'Google Developer Student Club',
      description: 'Contributing to GDSC initiatives and mentoring fellow students in technology.'
    },
    {
      icon: Building,
      title: 'College Head',
      organization: 'Bureau of Indian Standards',
      description: 'Representing the college in BIS activities and quality standards initiatives.'
    },
    {
      icon: Users,
      title: 'Tech Lead',
      organization: 'Geeks for Geeks PESITM',
      description: 'Leading technical workshops and coding competitions for students.'
    }
  ];

  return (
    <section id="leadership" className="py-20">
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
            Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
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
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <role.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {role.title}
                  </h3>
                  <p className={`font-semibold mb-3 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {role.organization}
                  </p>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {role.description}
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

export default Leadership;