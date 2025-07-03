const permissions = require("../constants/permissions");

const authorize = (requiredPermission) => {
  return (request, response, next) => {
    const user = request.user;

    if (!user) {
      return response.status(401).json({ message: "Unauthorized: No user information found" });
    }

    const userPermissions = permissions[user.role] || [];

    if (!userPermissions.includes(requiredPermission)) {
      return response.status(403).json({
        message: "Forbidden: You do not have the required permission",
        required: requiredPermission,
        userRole: user.role,
        userPermissions,
      });
    }

    next();
  };
};

module.exports = authorize;
