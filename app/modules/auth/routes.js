/**
 * Authentication Module Routes
 */

// ExpressJS Core
const express = require('express');
const router = express.Router();

// Controllers
const UserCtrl = require('./controllers/user.controller');
const { userValidation, userValidationHandler} = require('../auth/middelwares/userValidation');

// Routes

router.post('/register', userValidation, userValidationHandler,UserCtrl.Register);
router.post('/login', UserCtrl.Login);

module.exports = router;