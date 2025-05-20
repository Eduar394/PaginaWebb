const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendConfirmationEmail, sendPasswordResetEmail } = require('../utils/sendEmail');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });
    const token = crypto.randomBytes(20).toString('hex');
    user.confirmToken = token;
    user.confirmed = false;
    await user.save();

    await sendConfirmationEmail(user.email, token);
    res.status(201).json({ message: 'Check your email to confirm your account' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.confirmAccount = async (req, res) => {
  const user = await User.findOne({ confirmToken: req.params.token });
  if (!user) return res.status(400).json({ message: 'Invalid token' });

  user.confirmed = true;
  user.confirmToken = undefined;
  await user.save();
  res.json({ message: 'Account confirmed' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid credentials' });
    if (!user.confirmed) return res.status(403).json({ message: 'Confirm your email first' });

    res.json({ token: generateToken(user) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const token = crypto.randomBytes(20).toString('hex');
  user.resetToken = token;
  await user.save();
  await sendPasswordResetEmail(user.email, token);
  res.json({ message: 'Check your email to reset password' });
};

exports.resetPassword = async (req, res) => {
  const user = await User.findOne({ resetToken: req.params.token });
  if (!user) return res.status(400).json({ message: 'Invalid token' });

  user.password = req.body.password;
  user.resetToken = undefined;
  await user.save();
  res.json({ message: 'Password updated' });
};

