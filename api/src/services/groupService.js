const groupModel = require('../models/groupModel');
const userService = require('./userService');

const getGroupById = (groupId) => {
  return groupModel.getGroupById(groupId);
};

const getGroups = () => {
    return groupModel.getGroups();
  };
  
const createGroup = (name, creatorUserId) => {
  return groupModel.createGroup(name, creatorUserId);
};

const getMembersByGroupId = (groupId) => {
  return groupModel.getMembersByGroupId(groupId);
};

const getSharedSongsByGroupId = async (groupId) => {
  try {
    const sharedSongs = await groupModel.getSharedSongsByGroupId(groupId);
    return sharedSongs.map((song) => ({
      id: song.id,
      userId: song.user_id,
      groupId: song.group_id,
      songLink: song.song_url,
      active: song.active,
      createdOn: song.created_on,
    }));
  } catch (error) {
    console.error('Error in getSharedSongsByGroupId:', error);
  }

};

const addSharedSong = async (userId, groupId, songLink) => {
    return groupModel.addSharedSong(userId, groupId, songLink, true);
};

const addUsernameToGroup = async (username, groupId) => {
  try {
    const user = await userService.getUserByUsername(username);
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    
    const existingMembers = await getMembersByGroupId(groupId);
    const existingMembership = existingMembers.find((member) => member.user_id === user.user_id);
    if (existingMembership) {
      return { success: false, message: 'User is already part of the group' };
    }
    
    await groupModel.addUserToGroup(user.user_id, groupId);
    return { success: true, message: 'User successfully added to the group' };
  
  } catch (error) {
    console.error('Error adding user to group:', error);
    return { success: false, message: 'An error occurred' };
  }
  
};


module.exports = {
  getGroupById,
  getGroups,
  createGroup,
  getMembersByGroupId,
  getSharedSongsByGroupId,
  addSharedSong,
  addUsernameToGroup,
};
