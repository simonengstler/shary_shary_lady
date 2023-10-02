const express = require('express');
const groupController = require('../controller/groupController.js');

const router = express.Router();

router.get('/:groupId', groupController.getGroupById);
router.get('/', groupController.getGroups);
router.post('/', groupController.createGroup);
router.get('/members/:groupId', groupController.getMembersByGroupId);
router.get('/songs/:groupId', groupController.getSharedSongsByGroupId);
router.post('/songs/', groupController.shareActiveSong);

module.exports = router;
