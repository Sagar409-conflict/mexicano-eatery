const pool = require('../config/db');

/**
 * GET /api/menu
 * Returns all menu items grouped by category.
 */
const getAllMenuItems = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, description, price, category, image_url FROM menu_items ORDER BY category, id'
    );

    // Group items by category
    const grouped = rows.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    res.json({
      success: true,
      data: grouped,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllMenuItems };
