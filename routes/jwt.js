var express = require('express');
var router = express.Router();

var authenticate_controller = require('../controllers/authenticate.controller')

router.post('/authenticate', authenticate_controller.authenticate);

module.exports = router;