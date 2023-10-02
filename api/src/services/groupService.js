const groupModel = require('../models/groupModel');

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

const shareActiveSong = async (userId, groupId, songLink) => {
    return groupModel.shareActiveSong(userId, groupId, songLink);
};


module.exports = {
  getGroupById,
  getGroups,
  createGroup,
  getMembersByGroupId,
  getSharedSongsByGroupId,
  shareActiveSong,
};
