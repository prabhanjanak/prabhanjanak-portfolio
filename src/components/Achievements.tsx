import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Lightbulb, Users as UsersIcon } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const achievements = [
    {
      icon: Trophy,
      title: '1st Place at IEEE CodXpress',
      level: 'Hub Level',
      description: 'Won first place in competitive programming competition at hub level.'
    },
    {
      icon: Medal,
      title: '2nd Place at IEEE CodXpress',
      level: 'State Level',
      description: 'Secured second position in state-level programming competition.'
    },
    {
      icon: Lightbulb,
      title: 'Best Idea Pitch',
      level: 'IDE Bootcamp, NITK Surathkal',
      description: 'Awarded best idea pitch for innovative technology solution.'
    },
    {
      icon: Target,
      title: 'Finalist at Smart India Hackathon',
      level: '2023',
      description: 'Selected as finalist in national-level hackathon competition.'
    },
    {
      icon: UsersIcon,
      title: 'AgriML Workshop Participant',
      level: 'Naavic-Nivedi',
      description: 'Participated in specialized workshop on agricultural machine learning.'
    }
  ];

  return (
    <section id="achievements" className="py-20">
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
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
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
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  <achievement.icon size={32} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`font-semibold mb-3 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {achievement.level}
                </p>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;