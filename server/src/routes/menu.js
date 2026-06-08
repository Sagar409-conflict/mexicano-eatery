const express = require('express');
const router = express.Router();
const { getAllMenuItems } = require('../controllers/menuController');

// GET /api/menu — Fetch all menu items grouped by category
router.get('/', getAllMenuItems);

module.exports = router;
