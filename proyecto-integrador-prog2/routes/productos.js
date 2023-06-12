var express = require('express')
var router = express.Router()
const controller = require('../controllers/productosController')


// router.get('/', controller.index);

// router.get('/all', controller.findAll);

//findByPk
router.get('/id/:id', controller.show)

router.get('/detail/:id', controller.show); //filtra por primaryKey

router.get('/busqueda', controller.resultado ) //findAll

//router.get('/agregar', controller.agregar);

router.get('/register', controller.showForm);

router.post('/register', controller.store);

module.exports = router;
