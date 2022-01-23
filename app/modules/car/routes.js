/**
 * Authentication Module Routes
 */

// ExpressJS Core
const express = require('express');
const router = express.Router();

// Controllers
const CarCtrl = require('./controllers/car.controller');

// Routes
router.get(  '/', CarCtrl.Index );

router.post(  '/', CarCtrl.Create );

router.get(  '/:id', CarCtrl.Single );

router.put(  '/:id', CarCtrl.Update );

router.delete(  '/:id', CarCtrl.Delete );

module.exports = router;
