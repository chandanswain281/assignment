var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller')

router
.route('/')
.get(userController.getAll)
.post(userController.createUserInfo)

module.exports = router;
