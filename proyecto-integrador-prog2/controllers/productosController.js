const db = require('../database/models')
const productos = db.Producto; // Alias del modelo
let op = db.Sequelize.Op

const controller = {
     findAll: (req, res) => {

         productos.findAll()
         //{
    //         order:[['createdAt', 'DESC']],
    //         limit: 5
    //     })
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
            where: [{
              producto: {[op.like]: `%${busqueda}%`}
            },]
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
            return res.render('product-add');
    },

    store: (req,res) => {
        let info = req.body;
        console.log(info)
        productos.create(info)
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


