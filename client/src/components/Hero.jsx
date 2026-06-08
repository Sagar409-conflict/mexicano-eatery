import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/hero.jpg" alt="El Fuego Mexican Restaurant" />
        <div className="hero-overlay"></div>
      </div>

      {/* Decorative floating elements */}
      <span className="hero-decor hero-decor-1">🌶️</span>
      <span className="hero-decor hero-decor-2">🌮</span>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Authentic Mexican Cuisine
        </div>

        <h1 className="hero-title">
          <span className="line">Where Every</span>
          <span className="line"><span className="accent">Flame</span> Tells</span>
          <span className="line">a Story</span>
        </h1>

        <p className="hero-description">
          Experience the bold, fiery flavors of Mexico with handcrafted dishes 
          made from the freshest ingredients. From sizzling tacos to signature 
          margaritas — every bite is a celebration.
        </p>

        <div className="hero-actions">
          <a href="#reservation" className="btn-primary" id="hero-book-table">
            Reserve Your Table
            <span>→</span>
          </a>
          <a href="#menu" className="btn-secondary" id="hero-view-menu">
            Explore Menu
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Years</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">50+</div>
            <div className="hero-stat-label">Dishes</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">4.9</div>
            <div className="hero-stat-label">Rating</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
