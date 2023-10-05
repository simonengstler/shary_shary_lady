const express = require('express');
const groupController = require('../controller/groupController.js');

const router = express.Router();

router.get('/', groupController.getGroups);
router.get('/:groupId', groupController.getGroupById);
router.get('/user/:userId', groupController.getGroupsByUserId);
router.post('/', groupController.createGroup);
router.get('/members/:groupId', groupController.getMembersByGroupId);
router.get('/songs/:groupId', groupController.getSharedSongsByGroupId);
router.post('/songs/', groupController.shareActiveSong);
router.post('/invite/', groupController.inviteUsernameToGroup);

module.exports = router;
