const groupModel = require('../models/groupModel');

const getGroupByName = (groupName) => {
  return userModel.getGroupByName(groupName);
};

const getGroups = () => {
    return groupModel.getGroups();
  };
  

module.exports = {
  getGroupByName,
  getGroups,
};
