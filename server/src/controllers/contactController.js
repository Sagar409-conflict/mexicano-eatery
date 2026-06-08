const pool = require('../config/db');
const { validationResult } = require('express-validator');

/**
 * POST /api/contact
 * Submits a contact/inquiry message.
 */
const submitContactMessage = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, message } = req.body;

    const [result] = await pool.query(
      `INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)`,
      [name, email, message]
    );

    res.status(201).json({
      success: true,
      message: '✅ Message received! We will get back to you soon.',
      data: {
        id: result.insertId,
        name,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContactMessage };
