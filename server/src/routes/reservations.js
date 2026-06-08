const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { createReservation } = require('../controllers/reservationController');

// Validation rules for reservation
const reservationValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name must be 100 characters or less'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isLength({ min: 7, max: 15 })
    .withMessage('Phone must be between 7-15 characters'),
  body('date')
    .notEmpty()
    .withMessage('Reservation date is required')
    .isDate()
    .withMessage('Invalid date format'),
  body('time')
    .notEmpty()
    .withMessage('Reservation time is required')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('Time must be in HH:MM format'),
  body('guests')
    .isInt({ min: 1, max: 20 })
    .withMessage('Guests must be between 1 and 20'),
];

// POST /api/reservations — Book a table
router.post('/', reservationValidation, createReservation);

module.exports = router;
