const express = require('express');

// const fs = require('fs');

const router = express.Router();
const userController = require('../controllers/userController');

router.param('id', userController.checkId);

router.route('/').get(userController.getUsers).post(userController.createUser);

router.route('/:id').get(userController.getUserbyID);

module.exports = router;
