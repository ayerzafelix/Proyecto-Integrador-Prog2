var express = require('express')
var router = express.Router()
const controller = require('../controllers/productosController')


// router.get('/', controller.index);

router.get('/', controller.findAll);

//findByPk
router.get('/id/:id', controller.show);

 //filtra por primaryKey
router.get('/detail/:id', controller.show);

router.get('/busqueda', controller.resultado ); //findAll

router.get('/agregar', controller.showForm);

router.post('/agregar', controller.store);

router.get("/actualizar/:id", controller.showFormupdate);

router.post("/actualizar/:id", controller.update);

router.post("/eliminar", controller.destroy);

router.get('/register', controller.showForm);

router.post('/register', controller.store);

module.exports = router;
