import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  year: string;
  type: string;
  doi: string;
  doiUrl: string;
  description: string;
}

const publications: Publication[] = [
  {
    title: 'Graph Neural Networks for Scene Understanding: A Review and Future Directions',
    year: '2025',
    type: 'Book Chapter',
    doi: '10.1007/978-3-031-88538-9_13',
    doiUrl: 'https://doi.org/10.1007/978-3-031-88538-9_13',
    description:
      'Comprehensive review of Graph Neural Networks applications in scene understanding, exploring current methodologies and future research directions in computer vision and spatial reasoning.',
  },
];

export function Publications() {
  return (
    <section
      id="publications"
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
            Publications
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary transition-all shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                      {pub.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 text-sm text-light-muted dark:text-dark-muted mb-3">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {pub.type}
                      </span>
                      <span>{pub.year}</span>
                    </div>

                    <p className="text-light-text/70 dark:text-dark-text/70 mb-4">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="text-sm">
                        <span className="text-light-muted dark:text-dark-muted">DOI: </span>
                        <code className="text-primary font-mono text-xs">{pub.doi}</code>
                      </div>

                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="https://orcid.org/0009-0005-0824-9550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
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
              View ORCID Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
