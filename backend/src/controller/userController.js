const { USER_ROLES } = require("../constants/userConstants");
const bcrypt = require("bcryptjs");
const Users = require("../model/Users");
const { send } = require("../service/emailService");

const generateRandomPassword = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const userController = {
  create: async (request, response) => {
    try {
      const { name, email, role } = request.body;

      if (!USER_ROLES.includes(role)) {
        return response.status(400).json({ message: "Invalid role" });
      }

      const temporaryPassword = generateRandomPassword();
      const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

      const user = await Users.create({
        email,
        password: hashedPassword,
        name,
        role,
        adminId: request.user.id,
      });

      try {
        await send(
          email,
          "Affinex Temporary Password",
          `Hi ${name},\n\nYour temporary password is: ${temporaryPassword}\n\nPlease change it after logging in.`
        );
        response.status(201).json({
          message: "User created and email sent",
          user,
        });
      } catch (emailError) {
        console.error(
          `User created, but email could not be sent to ${email}. Temporary password: ${temporaryPassword}`,
          emailError
        );
        response.status(201).json({
          message:
            "User created but email could not be sent. Check logs for temporary password.",
          user,
        });
      }
    } catch (error) {
      console.error("Create user error:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  },

  getAll: async (request, response) => {
    try {
      const users = await Users.find({ adminId: request.user.id });
      response.json(users);
    } catch (error) {
      console.error("Get all users error:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  },

  update: async (request, response) => {
    try {
      const { id } = request.params;
      const { name, role } = request.body;

      if (role && !USER_ROLES.includes(role)) {
        return response.status(400).json({ message: "Invalid role" });
      }

      const user = await Users.findOne({ _id: id, adminId: request.user.id });

      if (!user) {
        return response.status(404).json({ message: "User does not exist" });
      }

      if (name) user.name = name;
      if (role) user.role = role;

      await user.save();
      response.json({ message: "User updated", user });
    } catch (error) {
      console.error("Update user error:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  },

  delete: async (request, response) => {
    try {
      const { id } = request.params;

      const user = await Users.findOneAndDelete({
        _id: id,
        adminId: request.user.id,
      });

      if (!user) {
        return response.status(404).json({ message: "User does not exist" });
      }

      response.json({ message: "User account deleted" });
    } catch (error) {
      console.error("Delete user error:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = userController;
