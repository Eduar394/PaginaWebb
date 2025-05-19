const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    }
  ],
  total: Number,
  paymentMethod: String,
  isPaid: { type: Boolean, default: false },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
