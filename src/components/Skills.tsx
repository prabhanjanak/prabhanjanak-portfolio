import { motion } from 'framer-motion';
import {
  Code,
  Cloud,
  Network,
  Shield,
  Database,
  Wrench,
  Brain,
  Globe,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    skills: [
      'Deep Learning',
      'Computer Vision',
      'PyTorch',
      'TensorFlow',
      'Graph Neural Networks',
      'LLM Integration',
      'YOLOv5',
    ],
    color: 'from-primary to-primary/70',
  },
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['Python', 'Bash', 'PowerShell', 'Java', 'C/C++', 'JavaScript', 'TypeScript'],
    color: 'from-accent to-accent/70',
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    skills: ['Oracle Cloud (OCI)', 'AWS', 'Docker', 'Git', 'GitHub Actions', 'CI/CD'],
    color: 'from-primary to-accent',
  },
  {
    title: 'Web Development',
    icon: <Globe className="w-6 h-6" />,
    skills: ['React', 'Node.js', 'Supabase', 'Web3', 'REST APIs', 'Frontend/Backend'],
    color: 'from-accent to-primary',
  },
  {
    title: 'Networking',
    icon: <Network className="w-6 h-6" />,
    skills: ['TCP/IP', 'DNS', 'DHCP', 'M2M Communication', 'Network Configuration'],
    color: 'from-primary/80 to-accent/80',
  },
  {
    title: 'Security',
    icon: <Shield className="w-6 h-6" />,
    skills: [
      'Wireshark',
      'Burp Suite',
      'Network Threat Analysis',
      'Intrusion Detection',
      'Cybersecurity',
    ],
    color: 'from-accent/80 to-primary/80',
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6" />,
    skills: ['SQL', 'NoSQL', 'PostgreSQL', 'Firebase', 'Database Design'],
    color: 'from-primary to-primary/80',
  },
  {
    title: 'Support & Tools',
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      'Troubleshooting',
      'Documentation',
      'Jira',
      'Log Analysis',
      'Linux/Windows/Mac',
      'Knowledge Articles',
    ],
    color: 'from-accent to-accent/80',
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-light-bg dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-light-text dark:text-dark-text mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 hover:border-primary transition-all shadow-lg hover:shadow-xl">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs rounded-full bg-light-muted/10 dark:bg-dark-muted/10 text-light-text dark:text-dark-text border border-light-muted/20 dark:border-dark-muted/20 group-hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-display font-bold text-light-text dark:text-dark-text mb-6 text-center">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Customer Communication',
                'Documentation',
                'Problem Solving',
                'Collaboration',
                'Accountability',
                'Troubleshooting',
                'Knowledge Sharing',
                'Adaptability',
                'Conflict Management',
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-light-text dark:text-dark-text border border-primary/30 font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
