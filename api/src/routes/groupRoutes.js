const express = require('express');
const groupController = require('../controller/groupController.js');

const router = express.Router();

router.get('/:name', groupController.getGroupByName);
router.get('/', groupController.getGroups);

module.exports = router;
