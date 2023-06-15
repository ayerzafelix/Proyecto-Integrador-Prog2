var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')


/* GET users listing. */
//router.get('/login', controller.login)

//router.get('/register', controller.register)

router.get('/profile', controller.profile)

router.get('/edit-profile', controller.edit)
router.get("/profile/:id", controller.profileId)

router.get('/register', controller.create );
router.post('/register', controller.store)

router.get('/login', controller.login );
router.post('/login', controller.loginPost)

module.exports = router;


