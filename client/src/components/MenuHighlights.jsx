import { useState, useEffect, useRef } from 'react';
import '../styles/MenuHighlights.css';

const CATEGORY_ICONS = {
  Starters: '🥑',
  Tacos: '🌮',
  Mains: '🍖',
  Drinks: '🍹',
};

// Fallback data when API is not available
const FALLBACK_MENU = {
  Starters: [
    { id: 1, name: 'Guacamole Fresco', description: 'Freshly made guacamole with ripe avocados, lime, cilantro, and jalapeños. Served with warm tortilla chips.', price: 9.99 },
    { id: 2, name: 'Queso Fundido', description: 'Melted Oaxacan cheese with chorizo, roasted peppers, and fresh herbs. Served bubbly hot.', price: 11.50 },
    { id: 3, name: 'Elote Callejero', description: 'Grilled Mexican street corn with mayo, cotija cheese, chili powder, and lime.', price: 7.50 },
  ],
  Tacos: [
    { id: 4, name: 'Tacos Al Pastor', description: 'Marinated pork with pineapple, cilantro, onion, and salsa verde on handmade corn tortillas.', price: 14.99 },
    { id: 5, name: 'Tacos de Birria', description: 'Slow-braised beef birria tacos dipped in consommé, topped with onion, cilantro, and lime.', price: 16.50 },
    { id: 6, name: 'Tacos de Camarones', description: 'Crispy battered shrimp with chipotle crema, shredded cabbage, and pickled red onion.', price: 15.99 },
  ],
  Mains: [
    { id: 7, name: 'Enchiladas Suizas', description: 'Chicken enchiladas smothered in creamy tomatillo sauce with sour cream and queso fresco.', price: 18.99 },
    { id: 8, name: 'Carne Asada Platter', description: 'Grilled marinated flank steak with rice, beans, pico de gallo, guacamole, and warm tortillas.', price: 22.50 },
    { id: 9, name: 'Mole Poblano', description: 'Slow-cooked chicken in rich mole sauce with over 20 ingredients. A true Mexican classic.', price: 20.99 },
  ],
  Drinks: [
    { id: 10, name: 'Margarita Clásica', description: 'House margarita with premium tequila, fresh lime juice, and agave nectar. On the rocks.', price: 12.00 },
    { id: 11, name: 'Horchata', description: 'Traditional Mexican rice milk beverage with cinnamon and vanilla. Creamy and refreshing.', price: 5.50 },
    { id: 12, name: 'Agua de Jamaica', description: 'Hibiscus flower iced tea sweetened with cane sugar. A refreshing Mexican classic.', price: 4.50 },
  ],
};

const MenuHighlights = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('/api/menu');
        const data = await res.json();
        if (data.success) {
          setMenuData(data.data);
        } else {
          setMenuData(FALLBACK_MENU);
        }
      } catch {
        setMenuData(FALLBACK_MENU);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Local observer for elements rendered after async data load
  useEffect(() => {
    if (loading || !menuData) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const section = document.getElementById('menu');
    if (section) {
      section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, [loading, menuData, activeCategory]);

  const categories = menuData ? ['All', ...Object.keys(menuData)] : [];

  const getFilteredItems = () => {
    if (!menuData) return [];
    if (activeCategory === 'All') {
      return Object.entries(menuData).flatMap(([cat, items]) =>
        items.map((item) => ({ ...item, category: cat }))
      );
    }
    return (menuData[activeCategory] || []).map((item) => ({
      ...item,
      category: activeCategory,
    }));
  };

  return (
    <section className="menu-section section" id="menu">
      <div className="container">
        <div className="menu-header reveal">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">
            Handcrafted with <span className="highlight">Passion</span>
          </h2>
          <p className="section-subtitle">
            Every dish is a celebration of authentic Mexican flavors, prepared with love and the finest ingredients.
          </p>
        </div>

        {loading ? (
          <div className="menu-loading">
            <div className="menu-loading-spinner"></div>
            <p>Loading our delicious menu...</p>
          </div>
        ) : (
          <>
            <div className="menu-tabs reveal">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`menu-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  id={`menu-tab-${cat.toLowerCase()}`}
                >
                  {cat !== 'All' && CATEGORY_ICONS[cat] ? `${CATEGORY_ICONS[cat]} ` : ''}
                  {cat}
                </button>
              ))}
            </div>
            <div className="menu-grid">
              {getFilteredItems().map((item) => (
                <div className="glass-card menu-card reveal" key={item.id}>
                  <div className="menu-card-icon">
                    {CATEGORY_ICONS[item.category] || '🍽️'}
                  </div>
                  <div className="menu-card-content">
                    <div className="menu-card-header">
                      <h3 className="menu-card-name">{item.name}</h3>
                      <span className="menu-card-price">${parseFloat(item.price).toFixed(2)}</span>
                    </div>
                    <p className="menu-card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MenuHighlights;
