const groupModel = require("../models/groupModel");
const { get } = require("../routes/groupRoutes");
const userService = require("./userService");

const getGroups = () => {
  return groupModel.getGroups();
};

const getGroupById = (groupId) => {
  return groupModel.getGroupById(groupId);
};

const getGroupByName = async (name) => {
  const group = await groupModel.getGroupByName(name);
  return {
    groupId: group.group_id,
    name: group.name,
    createdBy: group.created_by,
    createdOn: group.created_on,
  }
};

const getGroupsByUserId = async (userId) => {
  try {
    const groups = await groupModel.getGroupsByUserId(userId);
    return groups.map((group) => ({
      id: group.id,
      userId: group.user_id,
      groupId: group.group_id,
      entryData: group.entry_data,
      name: group.name,
      createdBy: group.created_by,
      createdOn: group.created_on,
    }));
  } catch (error) {
    console.error("Error in getGroupsByUserId:", error);
  }
};

const createGroup = async (name, creatorUserId) => {
  await groupModel.createGroup(name, creatorUserId);
  const group = await getGroupByName(name);
  await groupModel.addUserToGroup(creatorUserId, group.groupId);
  return group;
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
    console.error("Error in getSharedSongsByGroupId:", error);
  }
};

const addSharedSong = async (userId, groupId, songLink) => {
  return groupModel.addSharedSong(userId, groupId, songLink, true);
};

const addUsernameToGroup = async (username, groupId) => {
  try {
    const user = await userService.getUserByUsername(username);
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const existingMembers = await getMembersByGroupId(groupId);
    const existingMembership = existingMembers.find(
      (member) => member.user_id === user.user_id
    );
    if (existingMembership) {
      return { success: false, message: "User is already part of the group" };
    }

    await groupModel.addUserToGroup(user.user_id, groupId);
    return { success: true, message: "User successfully added to the group" };
  } catch (error) {
    console.error("Error adding user to group:", error);
    return { success: false, message: "An error occurred" };
  }
};

module.exports = {
  getGroups,
  getGroupById,
  getGroupByName,
  getGroupsByUserId,
  createGroup,
  getMembersByGroupId,
  getSharedSongsByGroupId,
  addSharedSong,
  addUsernameToGroup,
};
