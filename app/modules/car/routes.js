/**
 * Authentication Module Routes
 */

// ExpressJS Core
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Middleware
const {carValidators, carValidationHandler } = require("../car/middelwares/carValidation")


// Controllers
const CarCtrl = require('./controllers/car.controller');

// Routes
router.get(  '/', passport.authenticate('jwt',{session: false}),CarCtrl.Index );

router.post(  '/', carValidators, carValidationHandler, CarCtrl.Create );

router.get(  '/:id', CarCtrl.Single );

router.put(  '/:id', CarCtrl.Update );

router.delete(  '/:id', CarCtrl.Delete );

module.exports = router;
