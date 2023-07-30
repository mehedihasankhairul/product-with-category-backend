const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

// Get products by category ID
router.get('/:categoryId/products', async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findById(categoryId).populate('products');
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category.products);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add a product to a category
router.post('/:categoryId/products', async (req, res) => {
  const categoryId = req.params.categoryId;
  const { name, quantity, price } = req.body;
  try {
    const category = await Category.findById(categoryId);
    console.log(categoryId)
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    const product = await Product.create({ name, quantity, price, category: categoryId });
    category.products.push(product);
    await category.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

module.exports = router;