const groupService = require("../services/groupService.js");

const getGroups = async (_, res) => {
  const groups = await groupService.getGroups();
  res.status(200).json(groups);
};

const getGroupById = async (req, res) => {
  const groupId = req.params.groupId;
  const group = await groupService.getGroupById(groupId);
  res.status(200).json(group);
};

const getGroupsByUserId = async (req, res) => {
  const userId = req.params.userId;
  const group = await groupService.getGroupsByUserId(userId);
  res.status(200).json(group);
};

const createGroup = async (req, res) => {
  const { name, creatorUserId } = req.body;
  const group = await groupService.createGroup(name, creatorUserId);
  res.status(201).json(group);
};

const getMembersByGroupId = async (req, res) => {
  const groupId = req.params.groupId;
  const members = await groupService.getMembersByGroupId(groupId);
  res.status(200).json(members);
};

const getSharedSongsByGroupId = async (req, res) => {
  const groupId = req.params.groupId;
  const songs = await groupService.getSharedSongsByGroupId(groupId);
  res.status(200).json(songs);
};

const shareActiveSong = async (req, res) => {
  const { userId, groupId, songLink } = req.body;
  const result = await groupService.addSharedSong(userId, groupId, songLink);
  res.status(201).json(result);
};

const inviteUsernameToGroup = async (req, res) => {
  const { username, groupId } = req.body;

  const result = await groupService.addUsernameToGroup(username, groupId);
  
  if (result.success) {
    return res.status(200).json({ message: result.message });
  } else {
    return res.status(400).json({ error: result.message });
  }
};

module.exports = {
  getGroups,
  getGroupById,
  getGroupsByUserId,
  createGroup,
  getMembersByGroupId,
  getSharedSongsByGroupId,
  shareActiveSong,
  inviteUsernameToGroup,
};
