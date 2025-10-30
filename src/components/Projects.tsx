import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  location: string;
  description: string[];
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'OPinion – Decentralized Peer Review Platform',
    date: 'Dec 2024',
    location: 'TONx Society India',
    description: [
      'Designed blockchain-based platform ensuring tamper-proof data and reliable user support',
      'Implemented Web3 integration for decentralized peer review system',
      'Built with focus on data integrity and transparency',
    ],
    tech: ['Blockchain', 'Web3', 'React', 'Smart Contracts'],
  },
  {
    title: 'Realtime Fuel Saving Tips for Vehicle Drivers',
    date: 'Jun 2024',
    location: 'BIET - Davangere',
    description: [
      'Integrated GPS and IoT sensors with focus on data integrity and error handling',
      'Developed real-time analytics system for fuel consumption optimization',
      'Implemented robust troubleshooting mechanisms for sensor data',
    ],
    tech: ['IoT', 'Python', 'GPS Integration', 'Real-time Analytics'],
  },
  {
    title: 'Right Brothers – AI-powered Legal Assistance Tool',
    date: 'Dec 2023',
    location: 'PESITM - Shivamogga',
    description: [
      'Built robust ML pipelines with attention to error handling and input validation',
      'Developed NLP models for legal document analysis',
      'Implemented secure integration with legal databases',
    ],
    tech: ['Python', 'NLP', 'Machine Learning', 'Flask'],
  },
  {
    title: 'Diabetic Macular Edema Detection',
    date: 'Oct – Nov 2023',
    location: 'Sankara Eye Hospital - Shivamogga',
    description: [
      'Optimized hardware (GPU) for OCT scan classification',
      'Ensured secure data handling and patient privacy compliance',
      'Developed computer vision models for medical imaging analysis',
    ],
    tech: ['PyTorch', 'Computer Vision', 'Medical Imaging', 'GPU Optimization'],
  },
  {
    title: 'Child Healthcare Monitoring System',
    date: 'Apr 2023',
    location: 'PESITM - Shivamogga',
    description: [
      'Developed Android app with focus on troubleshooting sync issues',
      'Implemented accurate health data logging with data privacy measures',
      'Built real-time monitoring dashboard for healthcare providers',
    ],
    tech: ['Android', 'Java', 'Firebase', 'Healthcare APIs'],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-light-bg to-light-bg/50 dark:from-dark-bg dark:to-dark-bg/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-light-text dark:text-dark-text mb-12 text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 hover:border-primary transition-all shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm text-light-muted dark:text-dark-muted mb-4">
                    {project.date} • {project.location}
                  </div>
                  <p className="text-light-text/70 dark:text-dark-text/70 mb-4 line-clamp-3">
                    {project.description[0]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-light-bg dark:bg-dark-bg rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-light-text dark:text-dark-text mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="text-sm text-light-muted dark:text-dark-muted">
                    {selectedProject.date} • {selectedProject.location}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-light-muted/10 dark:hover:bg-dark-muted/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-light-text dark:text-dark-text" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {selectedProject.description.map((desc, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <p className="text-light-text/80 dark:text-dark-text/80">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-light-text dark:text-dark-text mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(selectedProject.github || selectedProject.demo) && (
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
