import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              🔥 El <span className="highlight">Fuego</span>
            </div>
            <p className="footer-brand-desc">
              Authentic Mexican cuisine crafted with passion and tradition. 
              Every flame tells a story, every dish is a celebration.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Instagram" id="social-instagram">📸</a>
              <a href="#" className="footer-social-link" aria-label="Facebook" id="social-facebook">👍</a>
              <a href="#" className="footer-social-link" aria-label="Twitter" id="social-twitter">🐦</a>
              <a href="#" className="footer-social-link" aria-label="TikTok" id="social-tiktok">🎵</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Navigate</h4>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#menu" className="footer-link">Menu</a>
              <a href="#reservation" className="footer-link">Reservations</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Hours</h4>
            <div className="footer-links">
              <span className="footer-link">Mon–Thu: 11AM–10PM</span>
              <span className="footer-link">Fri–Sat: 11AM–11:30PM</span>
              <span className="footer-link">Sunday: 11AM–10PM</span>
              <span className="footer-link">Happy Hour: 4–6PM</span>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Contact</h4>
            <div className="footer-links">
              <span className="footer-link">📍 420 Fiesta Blvd</span>
              <span className="footer-link">📞 (555) 123-FUEGO</span>
              <span className="footer-link">✉️ hola@elfuego.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} El Fuego. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
