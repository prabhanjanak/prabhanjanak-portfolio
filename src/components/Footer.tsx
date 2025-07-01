import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 border-t ${
      darkMode ? 'border-gray-700/50' : 'border-gray-200/50'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className={`flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 Prabhanjana K. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
            {' '}and cutting-edge technology
          </p>
          <p className={`mt-2 text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            AI/ML Engineer | Computer Vision Enthusiast | Web3 Innovator
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;