import { ThemeProvider } from './context/ThemeContext';
import { useCursorEffect } from './hooks/useCursorEffect';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function AppContent() {
  useCursorEffect();

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Experience />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
