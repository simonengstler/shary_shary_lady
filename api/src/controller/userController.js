const userService = require('../services/userService.js');

const getUser = async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getUserById(userId);
  res.json(user);
};

const getUsers = async (_, res) => {
    const users = await userService.getUsers();
    res.json(users);
  };

module.exports = {
  getUser,
  getUsers,
};
