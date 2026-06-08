import '../styles/About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper reveal">
            <div className="about-image">
              <img src="/about.jpg" alt="El Fuego restaurant interior" />
            </div>
            <div className="about-badge">
              <div className="about-badge-number">15+</div>
              <div className="about-badge-text">Years of Flavor</div>
            </div>
          </div>
          <div className="about-content reveal">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              A Taste of <span className="highlight">Mexico</span> in Every Bite
            </h2>
            <p className="about-text">
              Born from a passion for authentic Mexican cuisine, El Fuego brings the 
              vibrant flavors and traditions of Mexico to your table. Our chefs use 
              time-honored recipes passed down through generations, combined with the 
              freshest locally-sourced ingredients.
            </p>
            <p className="about-text">
              Every dish tells a story — from our hand-pressed tortillas to our 
              slow-braised meats and house-made salsas.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">🌽</div>
                <div>
                  <div className="about-feature-title">Farm Fresh</div>
                  <div className="about-feature-desc">Locally sourced ingredients daily</div>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">👨‍🍳</div>
                <div>
                  <div className="about-feature-title">Master Chefs</div>
                  <div className="about-feature-desc">Trained in traditional Mexican cuisine</div>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🔥</div>
                <div>
                  <div className="about-feature-title">Wood Fired</div>
                  <div className="about-feature-desc">Authentic charcoal & wood grilling</div>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🍹</div>
                <div>
                  <div className="about-feature-title">Craft Cocktails</div>
                  <div className="about-feature-desc">Handcrafted with premium spirits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-pattern"></div>
    </section>
  );
};

export default About;
