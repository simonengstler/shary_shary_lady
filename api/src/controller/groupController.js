const groupService = require('../services/groupService.js');

const getGroupByName = async (req, res) => {
  const groupName = req.params.name;
  const group = await groupService.getGroupByName(groupName);
  res.json(group);
};

const getGroups = async (_, res) => {
    const groups = await groupService.getGroups();
    res.json(groups);
  };

module.exports = {
  getGroupByName,
  getGroups,
};
