const express = require('express');
const router = new express.Router();
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/welcome', authMiddleware, userController.welcome);

module.exports = router;