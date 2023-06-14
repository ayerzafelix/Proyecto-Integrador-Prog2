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

        productos.findAll({
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

    //  agregar: function(req,res){
    //        return res.render('producto-add', {
    //        usuarioLogueado: true,
    //        users: data.users,
    //        })
    //
    //    }, 

    showForm: (req,res) => {
        if (req.session.user != undefined) {
            return res.render('producto-add');
         } else {
        return res.redirect ('/users/login');
        }
    },

    store: (req,res) => {
        let info = req.body;
        productos.create(info)
        .then((result) => {
            return res.redirect('/productos/') 
        }).catch((error) => {
            console.log(error)
        });
        
    }
 

}



module.exports = controller


