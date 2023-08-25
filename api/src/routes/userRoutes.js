const express = require('express');
const userController = require('../controller/userController.js');

const router = express.Router();

router.get('/:id', userController.getUser);
router.get('/', userController.getUsers);

module.exports = router;
