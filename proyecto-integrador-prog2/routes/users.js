var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')


/* GET users listing. */
router.get('/login', controller.login)

router.get('/register', controller.register)

router.get('/profile', controller.profile)

router.get('/edit-profile', controller.edit)

router.get('/register', );

module.exports = router;


