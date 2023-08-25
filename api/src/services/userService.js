const userModel = require('../models/userModel');

const getUserById = (userId) => {
  return userModel.getUserById(userId);
};

const getUsers = () => {
    return userModel.getUsers();
  };
  

module.exports = {
  getUserById,
  getUsers,
};
