import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-light-bg dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-light-text dark:text-dark-text mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-light-text/80 dark:text-dark-text/80 leading-relaxed">
            <p>
              AI ML graduate with hands-on experience in machine learning projects, web
              development, and cloud platforms. Trained in networking and cybersecurity through
              Cisco and Honeywell programs, with exposure to troubleshooting, scripting, and
              system setup across Linux, Windows, and Mac environments.
            </p>

            <p>
              Skilled in Python, Bash, and cloud services, with experience supporting clients
              through freelance development projects and technical documentation. Aspiring Engineer
              with a background in AI ML and training in networking and cybersecurity.
            </p>

            <p>
              Bringing hands-on exposure from internships in AI development and client-facing web
              projects, along with practical skills in troubleshooting, scripting, and
              documentation. Motivated to grow in technical support by contributing to reliable
              hardware/software integration and cloud-based systems, with a strong interest in
              supporting innovative platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                Education
              </h3>
              <p className="text-light-text/70 dark:text-dark-text/70">
                B.E. Artificial Intelligence & Machine Learning
              </p>
              <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                PVTU (2021–2025)
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
            >
              <Award className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                Certifications
              </h3>
              <ul className="text-sm text-light-text/70 dark:text-dark-text/70 space-y-1">
                <li>OCI Generative AI Professional</li>
                <li>Cisco Cybersecurity Specialist</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
            >
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                Languages
              </h3>
              <p className="text-light-text/70 dark:text-dark-text/70">
                Kannada, English, Hindi
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
