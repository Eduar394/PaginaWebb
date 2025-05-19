const express = require('express');
const { createOrder, getUserOrders, getAllOrders } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/mine', protect, getUserOrders);
router.get('/', protect, getAllOrders); // Admin check should be added

module.exports = router;
