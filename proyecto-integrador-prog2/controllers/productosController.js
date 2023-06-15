const db = require('../database/models')
const productos = db.Producto; // Alias del modelo
let op = db.Sequelize.Op

const controller = {
     findAll: (req, res) => {

        productos.findAll({
            include: {
                all:true,
                nested: true
            },
            order: [
                ['createdAt', 'DESC'],
            ]
        })
        .then(function(result) {
             return res.render('producto', { listaProductos: result });   
         }).catch(function (err){
             console.log(err);
         });
     },

    show: (req,res) => {

        //Filtrar por Pk

        let id = req.params.id;

        let rel = {
            include: {
                all:true,
                nested: true
            }
        } 

        productos.findByPk(id, rel)
        .then(function(result){

            console.log(result);
            return res.render('producto', {
                producto: result,
            })
        })
        .catch(function(err){
            console.log(err)
        });     
  

    },

    resultado: (req, res) => {
        let busqueda = req.query.search;

        let rel = {
            include: {
                all:true,
                nested: true
            }
        } 

        productos.findAll({
            include: {
                all:true,
                nested: true
            },
            where: {
                [op.or]: [
                    {producto: {[op.like]: `%${busqueda}%`}},
                    {descripcion: {[op.like]: `%${busqueda}%`}}
                ]
            },
            order: [
                ['createdAt', 'DESC'],
            ]
        })
        .then(function(result){
            return res.render('busqueda', {
                listaProductos: result
            })
        })
        .catch(function(err){
            console.log(err)
        });
    },


    showForm: (req,res) => {
        if (req.session.user != undefined) {
            return res.render('product-add');
        } else {
            return res.redirect('/users/login');
        }
    },

    store: (req,res) => {
        let info = req.body;
        info['usuarioId'] = req.session.user.id
        productos.create(info)

        /*let filtrado = {
            where: [{mail: producto_buscado}]
        };
        productos.findoOne(filtrado)
        .then(function(result){
            if (result != null){
                req.session.producto = result.dataValues
            }
        })*/

            return res.redirect('/') 
        
    },

    showFormupdate: (req,res) => {
        let id = req.params.id;
        productos.findByPk(id)
        .then((result) => {
            console.log(result);
            return res.render("product-edit", {productos: result})
        }).catch((err) => {
            console.log(err)
        })        
    },

    update: (req, res) => {
        let id = req.params.id
        let info = req.body;
        console.log(info);
        productos.update(info, {
            where: [
                {id: id}
            ]
        }).then((result) => {
            return res.redirect("/productos/detail/" + id)
        }).catch((err) => {
            console.log(err)
        });
    },

    destroy: (req, res) => {
        let idEliminar = req.body.id
        productos.destroy({
            where: [
                {id: idEliminar}
            ]
        }).then((result) => {
            return res.redirect("/")
        }).catch((err) => {
            console.log(err)
        });
    }

}



module.exports = controller


