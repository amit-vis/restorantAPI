const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

router.post('/create', userController.Register);
router.post('/login', userController.login);

module.exports = router;