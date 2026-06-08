import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <ReservationForm showToast={showToast} />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      {toast && (
        <div className={`toast ${toast.type}`} role="alert">
          {toast.message}
        </div>
      )}
    </>
  );
}

export default App;
