const pool = require('../config/db');
const { validationResult } = require('express-validator');

/**
 * POST /api/reservations
 * Creates a new table reservation.
 */
const createReservation = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, phone, date, time, guests } = req.body;

    const [result] = await pool.query(
      `INSERT INTO reservations (name, email, phone, reservation_date, reservation_time, guests)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone, date, time, guests]
    );

    res.status(201).json({
      success: true,
      message: '🎉 Reservation created successfully!',
      data: {
        id: result.insertId,
        name,
        email,
        phone,
        date,
        time,
        guests,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createReservation };
