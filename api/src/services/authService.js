const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");

const registerUser = (username, password) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return userModel.createUser(username, hashedPassword);
};

const loginUser = async (username) => {
    try {
      const rows = await userModel.getUserByUsername(username)
      return rows.length === 1 ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
  registerUser,
  loginUser,
};
