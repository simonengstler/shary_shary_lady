const groupService = require("../services/groupService.js");

const getGroupById = async (req, res) => {
  const groupId = req.params.groupId;
  const group = await groupService.getGroupById(groupId);
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
  const result = await groupService.shareActiveSong(userId, groupId, songLink);
  res.status(201).json(result);
};

module.exports = {
  getGroupById,
  getGroups,
  createGroup,
  getMembersByGroupId,
  getSharedSongsByGroupId,
  shareActiveSong,
};
