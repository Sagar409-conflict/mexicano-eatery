-- ============================================
-- El Fuego Mexican Restaurant — Database Setup
-- ============================================

CREATE DATABASE IF NOT EXISTS el_fuego_db;
USE el_fuego_db;

-- ----------------------------
-- Menu Items Table
-- ----------------------------
CREATE TABLE IF NOT EXISTS menu_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(6, 2) NOT NULL,
  category VARCHAR(50) NOT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------
-- Reservations Table
-- ----------------------------
CREATE TABLE IF NOT EXISTS reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  guests INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------
-- Contact Messages Table
-- ----------------------------
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------
-- Seed Menu Items
-- ----------------------------
INSERT INTO menu_items (name, description, price, category) VALUES
-- Starters
('Guacamole Fresco', 'Freshly made guacamole with ripe avocados, lime, cilantro, and jalapeños. Served with warm tortilla chips.', 9.99, 'Starters'),
('Queso Fundido', 'Melted Oaxacan cheese with chorizo, roasted peppers, and fresh herbs. Served bubbly hot.', 11.50, 'Starters'),
('Elote Callejero', 'Grilled Mexican street corn with mayo, cotija cheese, chili powder, and a squeeze of lime.', 7.50, 'Starters'),

-- Tacos
('Tacos Al Pastor', 'Marinated pork with pineapple, cilantro, onion, and salsa verde on handmade corn tortillas.', 14.99, 'Tacos'),
('Tacos de Birria', 'Slow-braised beef birria tacos dipped in consommé, topped with onion, cilantro, and lime.', 16.50, 'Tacos'),
('Tacos de Camarones', 'Crispy battered shrimp with chipotle crema, shredded cabbage, and pickled red onion.', 15.99, 'Tacos'),

-- Mains
('Enchiladas Suizas', 'Chicken enchiladas smothered in creamy tomatillo sauce, topped with sour cream and queso fresco.', 18.99, 'Mains'),
('Carne Asada Platter', 'Grilled marinated flank steak with rice, beans, pico de gallo, guacamole, and warm tortillas.', 22.50, 'Mains'),
('Mole Poblano', 'Slow-cooked chicken in rich, complex mole sauce with over 20 ingredients. A true Mexican classic.', 20.99, 'Mains'),

-- Drinks
('Margarita Clásica', 'House margarita with premium tequila, fresh lime juice, and agave nectar. Served on the rocks.', 12.00, 'Drinks'),
('Horchata', 'Traditional Mexican rice milk beverage with cinnamon and vanilla. Creamy and refreshing.', 5.50, 'Drinks'),
('Agua de Jamaica', 'Hibiscus flower iced tea sweetened with cane sugar. A refreshing Mexican classic.', 4.50, 'Drinks');
