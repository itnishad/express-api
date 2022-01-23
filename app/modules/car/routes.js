/**
 * Authentication Module Routes
 */

// ExpressJS Core
const express = require('express');
const {carValidators, carValidationHandler } = require("../car/middelwares/carValidation")
const router = express.Router();

// Controllers
const CarCtrl = require('./controllers/car.controller');

// Routes
router.get(  '/', CarCtrl.Index );

router.post(  '/', carValidators, carValidationHandler, CarCtrl.Create );

router.get(  '/:id', CarCtrl.Single );

router.put(  '/:id', CarCtrl.Update );

router.delete(  '/:id', CarCtrl.Delete );

module.exports = router;
