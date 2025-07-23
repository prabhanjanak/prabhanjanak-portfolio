import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prabh.bhat12@gmail.com',
      href: 'mailto:prabh.bhat12@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8951568286',
      href: 'tel:+918951568286'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Shivamogga, Karnataka, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/prabhanjanak'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/pkb1202'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Let's collaborate on exciting AI/ML projects or discuss opportunities in technology innovation
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-md border ${
                      darkMode
                        ? 'bg-gray-900/30 border-gray-700/50 hover:bg-gray-800/40'
                        : 'bg-white/30 border-white/50 hover:bg-white/40'
                    } shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.label}
                      </p>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      darkMode
                        ? 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                        : 'bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/70'
                    }`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl backdrop-blur-md border ${
                darkMode
                  ? 'bg-gray-900/30 border-gray-700/50'
                  : 'bg-white/30 border-white/50'
              } shadow-lg`}
            >
              <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Download My Resume
              </h4>
              <motion.a
                href="/Prabhanjana_K_CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📄 Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mail & WhatsApp Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col items-center justify-center gap-6 p-8 rounded-2xl backdrop-blur-md border ${
              darkMode
                ? 'bg-gray-900/30 border-gray-700/50'
                : 'bg-white/30 border-white/50'
            } shadow-xl`}
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Reach Out Instantly
            </h3>

            <motion.a
              href="mailto:prabh.bhat12@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full text-center flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} /> Send Email
            </motion.a>

            <motion.a
              href="https://wa.me/918951568286"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full text-center flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Send size={20} /> WhatsApp Chat
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
