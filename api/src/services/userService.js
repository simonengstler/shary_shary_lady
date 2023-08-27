const userModel = require('../models/userModel');

const getUserById = (userId) => {
  return userModel.getUserById(userId);
};

const getUserByUsername = (username) => {
    return userModel.getUserByUsername(username);
  };

const getUsers = () => {
  return userModel.getUsers();
};

module.exports = {
  getUserById,
  getUserByUsername,
  getUsers,
};
