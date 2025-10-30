import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Lakshya Webworks',
    role: 'Web Developer',
    type: 'Freelancer',
    location: 'Mysuru, Karnataka, India',
    period: 'Feb 2025 – Present',
    description: [
      'Provided client-facing support for web applications, resolving bug fixes, integrations, and database issues',
      'Authored support documentation to help clients manage Supabase authentication and workflows',
      'Delivered full-stack solutions with focus on user experience and performance',
    ],
  },
  {
    company: 'PerigoAI',
    role: 'AI Engineer Intern',
    type: 'On Site',
    location: 'Mysuru, Karnataka, India',
    period: 'Feb 2025 - Sept 2025',
    description: [
      'Worked closely with engineers to troubleshoot and optimize GPU workloads and cloud servers',
      'Provided support for deployment issues including API errors, integration failures, and real-time debugging',
      'Authored documentation and guided internal team on log monitoring and error resolution',
    ],
  },
  {
    company: 'ResoluteAI Softwares',
    role: 'AI/ML Research Intern',
    type: 'Remote',
    location: 'Bengaluru, Karnataka, India',
    period: 'Aug 2024 – May 2025',
    description: [
      'Developed ML pipelines and assisted in debugging integration issues during deployment',
      'Worked with academic–industry teams to resolve software compatibility and environment setup challenges',
      'Contributed to research on Graph Neural Networks and LLM applications',
    ],
  },
];

const training = [
  {
    name: 'Honeywell Cyber Security Youth Empowerment CSR Training Program',
    organization: 'Honeywell',
    period: '26th Aug – 13th Sep 2024',
    mentor: 'Mr. Gopal Sonkavade',
    highlights: [
      'Gained hands-on exposure to cybersecurity and networking concepts',
      'Network threat analysis, intrusion detection, and secure network simulation',
      'Applied practical skills in troubleshooting network configurations',
    ],
  },
  {
    name: 'Artificial Intelligence & Machine Learning Coders Training',
    organization: 'ResoluteAI',
    period: '16th Aug – 26th Aug 2023',
    mentor: 'Mr. Amit Arun Chimmalgi',
    highlights: [
      'Worked on data cleaning, visualization, and development of computer vision models (YOLOv5)',
      'Gained understanding of the basics of neural networks and their applications',
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-light-bg/50 to-light-bg dark:from-dark-bg/50 dark:to-dark-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-light-text dark:text-dark-text mb-12 text-center">
            Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-light-bg dark:border-dark-bg" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 hover:border-primary transition-all shadow-lg"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-light-muted dark:text-dark-muted mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-light-text/80 dark:text-dark-text/80">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-3xl font-display font-bold text-light-text dark:text-dark-text mb-8 text-center">
            Industrial Training
          </h3>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {training.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary transition-all shadow-lg"
              >
                <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                  {item.name}
                </h4>
                <div className="text-sm text-primary font-medium mb-1">{item.organization}</div>
                <div className="text-sm text-light-muted dark:text-dark-muted mb-2">
                  {item.period}
                </div>
                <div className="text-sm text-light-text/70 dark:text-dark-text/70 mb-3">
                  Mentor: {item.mentor}
                </div>
                <ul className="space-y-2 text-sm">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-light-text/80 dark:text-dark-text/80"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
