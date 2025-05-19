const express = require('express');
const {
  register,
  login,
  confirmAccount,
  forgotPassword,
  resetPassword
} = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/confirm/:token', confirmAccount);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;

