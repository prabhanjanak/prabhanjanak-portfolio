import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/prabhanjanak',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pkb1202',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/prabh.jpeg',
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: 'Email',
    url: 'mailto:prabh.bhat12@gmail.com',
    icon: <Mail className="w-5 h-5" />,
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0009-0005-0824-9550',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"
        />
        <path
          fill="#fff"
          d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4zM71.3 54.8c0-5.2 4.2-9.4 9.4-9.4s9.4 4.2 9.4 9.4c0 5.2-4.2 9.4-9.4 9.4s-9.4-4.2-9.4-9.4z"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="py-12 bg-light-bg dark:bg-dark-bg border-t border-light-muted/20 dark:border-dark-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 hover:border-primary text-light-text dark:text-dark-text hover:text-primary transition-all"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-2"
          >
            <p className="text-light-text/70 dark:text-dark-text/70">
              <a
                href="mailto:prabh.bhat12@gmail.com"
                className="hover:text-primary transition-colors"
              >
                prabh.bhat12@gmail.com
              </a>
              {' • '}
              <a
                href="mailto:prabhanjanakumaraswamy@gmail.com"
                className="hover:text-primary transition-colors"
              >
                prabhanjanakumaraswamy@gmail.com
              </a>
            </p>
            <p className="text-sm text-light-muted dark:text-dark-muted">
              © {new Date().getFullYear()} Prabhanjan K. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-xs text-light-muted dark:text-dark-muted"
          >
            <span>Built with</span>
            <span className="text-primary">React</span>
            <span>+</span>
            <span className="text-accent">Vite</span>
            <span>+</span>
            <span className="text-primary">Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
