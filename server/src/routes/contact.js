const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContactMessage } = require('../controllers/contactController');

// Validation rules for contact form
const contactValidation = [
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
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10-1000 characters'),
];

// POST /api/contact — Submit a contact message
router.post('/', contactValidation, submitContactMessage);

module.exports = router;
