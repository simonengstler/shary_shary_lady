const groupModel = require('../models/groupModel');

const getGroupByName = (groupName) => {
  return userModel.getGroupByName(groupName);
};

const getGroups = () => {
    return groupModel.getGroups();
  };
  
const createGroup = (name, creatorUserId) => {
  return groupModel.createGroup(name, creatorUserId);
}

module.exports = {
  getGroupByName,
  getGroups,
  createGroup,
};
