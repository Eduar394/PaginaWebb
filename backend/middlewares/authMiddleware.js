const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 🔐 Middleware para verificar token JWT
exports.protect = async (req, res, next) => {
  let token;

  // Verifica el header de autorización
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }
  } else {
    return res.status(401).json({ message: 'No autorizado, sin token' });
  }
};

// 🛡 Middleware para verificar rol de administrador
exports.admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Acceso denegado: sólo administradores' });
  }
};
