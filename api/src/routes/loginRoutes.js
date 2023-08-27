const express = require('express');
const loginController = require('../controller/loginController.js');

const router = express.Router();

router.get('/', loginController.getGroups);

module.exports = router;
