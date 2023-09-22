const express = require('express');
const groupController = require('../controller/groupController.js');

const router = express.Router();

router.get('/:groupId', groupController.getGroupById);
router.get('/', groupController.getGroups);
router.post('/', groupController.createGroup);

module.exports = router;
