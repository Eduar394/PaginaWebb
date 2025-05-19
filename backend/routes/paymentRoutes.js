// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js');
const { protect } = require('../middlewares/authMiddleware');

router.post('/payu/generate-signature', protect, (req, res) => {
  const { referenceCode, amount } = req.body;

  const apiKey = process.env.PAYU_API_KEY;
  const merchantId = process.env.PAYU_MERCHANT_ID;

  const raw = `${apiKey}~${merchantId}~${referenceCode}~${amount}~COP`;
  const signature = CryptoJS.MD5(raw).toString();

  res.json({ signature });
});

module.exports = router;

