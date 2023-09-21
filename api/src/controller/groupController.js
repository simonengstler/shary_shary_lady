const groupService = require('../services/groupService.js');

const getGroupByName = async (req, res) => {
  const groupName = req.params.name;
  const group = await groupService.getGroupByName(groupName);
  res.status(200).json(group);
};

const getGroups = async (_, res) => {
    const groups = await groupService.getGroups();
    res.status(200).json(groups);
  };

const createGroup = async (req, res) => {
  const { name, creatorUserId } = req.body;
  const group = await groupService.createGroup(name, creatorUserId);
  res.status(201).json(group);
};

module.exports = {
  getGroupByName,
  getGroups,
  createGroup,
};
