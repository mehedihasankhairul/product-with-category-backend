
const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new category
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.json(category);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

module.exports = router;