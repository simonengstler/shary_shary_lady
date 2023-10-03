const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");

const registerUser = (username, password) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return userModel.createUser(username, hashedPassword);
};

const loginUser = async (username) => {
    try {
      const user = await userModel.getUserByUsername(username)
      return user != null ? user : null;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
  registerUser,
  loginUser,
};
