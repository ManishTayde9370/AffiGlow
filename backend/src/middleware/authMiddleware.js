const jwt = require('jsonwebtoken');
const Users = require("../model/Users");

const authMiddleware = {
    protect: async (request, response, next) => {
        try {
            const token = request.cookies?.jwtToken;

            if (!token) {
                return response.status(401).json({ error: "Not Authenticated" });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!decoded || !decoded.id) {
                return response.status(401).json({ message: 'Invalid token payload' });
            }

            const user = await Users.findById(decoded.id);

            if (!user) {
                return response.status(401).json({ message: 'User not found' });
            }

            request.user = user;
            next();

        } catch (error) {
            console.error("Auth Middleware Error:", error);
            return response.status(500).json({ error: "Internal server error" });
        }
    },
};

module.exports = authMiddleware;
