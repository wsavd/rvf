var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/index.controller')

router.get('/', index_controller.index);

module.exports = router;