import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Brain, Scale, Car, Users } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      icon: Smartphone,
      title: 'Child Healthcare Monitoring System',
      description: 'Mobile application for comprehensive child health tracking with real-time monitoring and analytics.',
      technologies: ['Android', 'Firebase', 'Java', 'Material Design'],
      github: '#',
      demo: '#'
    },
    {
      icon: Brain,
      title: 'Diabetic Macular Edema Detection',
      description: 'AI-powered medical imaging tool achieving 99.28% accuracy in detecting diabetic macular edema.',
      technologies: ['PyTorch', 'VGG16', 'Computer Vision', 'Medical Imaging'],
      github: '#',
      demo: '#'
    },
    {
      icon: Scale,
      title: 'Right Brothers - Legal AI',
      description: 'Intelligent legal search and summarization platform powered by advanced NLP models.',
      technologies: ['Streamlit', 'Hugging Face', 'NLP', 'Python'],
      github: '#',
      demo: '#'
    },
    {
      icon: Car,
      title: 'Realtime Fuel Saving Tips',
      description: 'Smart application providing real-time fuel optimization suggestions using GPS and ML algorithms.',
      technologies: ['React', 'GPS API', 'Machine Learning', 'Optimization'],
      github: '#',
      demo: '#'
    },
    {
      icon: Users,
      title: 'OPinion - Web3 Peer Review',
      description: 'Decentralized peer review platform built on blockchain for transparent academic collaboration.',
      technologies: ['Web3', 'Blockchain', 'TON', 'Smart Contracts'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Innovative solutions that demonstrate my expertise in AI, web development, and emerging technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group p-6 rounded-2xl backdrop-blur-md border ${
                darkMode
                  ? 'bg-gray-900/30 border-gray-700/50 hover:bg-gray-800/40'
                  : 'bg-white/30 border-white/50 hover:bg-white/40'
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <project.icon size={24} />
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>

              <p className={`text-sm mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 text-xs rounded-full ${
                      darkMode
                        ? 'bg-blue-900/30 text-blue-300 border border-blue-700/30'
                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300/50'
                  }`}
                >
                  <Github size={16} />
                  Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;