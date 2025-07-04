const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorizeMiddleware'); 
const paymentController = require('../controller/paymentController');

const router = express.Router();

// Apply authentication middleware
router.use(authMiddleware.protect);

// Payment routes with authorization
router.post('/create-order', authorize('payment:create'), paymentController.createOrder);
router.post('/verify-order', authorize('payment:create'), paymentController.verifyOrder);

module.exports = router;
