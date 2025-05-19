const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { products, total, paymentMethod } = req.body;
  const order = new Order({
    user: req.user._id,
    products,
    total,
    paymentMethod,
  });
  await order.save();
  res.status(201).json(order);
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('products.product');
  res.json(orders);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user').populate('products.product');
  res.json(orders);
};
