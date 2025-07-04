const Razorpay = require('razorpay');
const crypto = require('crypto');
const Users = require('../model/Users');
const { CREDIT_PACKS } = require('../constants/payments');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

const paymentController = {
    createOrder: async (request, response) => {
        try {
            const { credits } = request.body;

            // Validate credits
            if (!CREDIT_PACKS[credits]) {
                return response.status(400).json({ error: 'Invalid credit pack selected' });
            }

            const amount = CREDIT_PACKS[credits] * 100; // Convert to paise

            const order = await razorpay.orders.create({
                amount,
                currency: 'INR',
                receipt: `receipt_${Date.now()}`
            });

            return response.json({ order });
        } catch (error) {
            console.error("Create order error:", error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    },

    verifyOrder: async (request, response) => {
        try {
            const {
                razorpayPaymentId,
                razorpayOrderId,
                razorpaySignature,
                credits
            } = request.body;

            const generatedSignature = crypto
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                .update(`${razorpayOrderId}|${razorpayPaymentId}`)
                .digest('hex');

            if (generatedSignature !== razorpaySignature) {
                return response.status(400).json({ message: 'Signature verification failed' });
            }

            if (!request.user || !request.user._id) {
                return response.status(401).json({ error: 'Unauthorized - User not found' });
            }

            const user = await Users.findById(request.user._id);
            if (!user) {
                return response.status(404).json({ error: 'User not found' });
            }

            user.credits += Number(credits);
            await user.save();

            return response.json({ user });
        } catch (error) {
            console.error("Verify order error:", error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = paymentController;
