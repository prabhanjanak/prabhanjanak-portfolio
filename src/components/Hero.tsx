import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 🌟 Track mouse position
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 🌌 Animated Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-blue-400/20' : 'bg-blue-600/20'
            }`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Your content continues... */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Everything else below stays the same as your version */}
        {/* ... keep all motion.divs, text, buttons, social links etc. */}
      </div>
    </section>
  );
};

export default Hero;
