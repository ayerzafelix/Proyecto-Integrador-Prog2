var express = require('express')
var router = express.Router()
const controller = require('../controllers/productosController')


router.get('/', controller.index);

router.get('/detail', controller.show)

router.get('/agregar', controller.show)


module.exports = router;


