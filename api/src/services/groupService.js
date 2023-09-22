const groupModel = require('../models/groupModel');

const getGroupById = (groupId) => {
  return groupModel.getGroupById(groupId);
};

const getGroups = () => {
    return groupModel.getGroups();
  };
  
const createGroup = (name, creatorUserId) => {
  return groupModel.createGroup(name, creatorUserId);
}

module.exports = {
  getGroupById,
  getGroups,
  createGroup,
};
