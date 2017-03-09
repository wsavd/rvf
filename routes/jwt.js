var express = require('express');
var router = express.Router();

var authenticate_controller = require('../controllers/authenticate.controller')

router.get('/authenticate', authenticate_controller.authenticate);

module.exports = router;