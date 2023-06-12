const db = require('../database/models')
const products = db.Product; // Alias del modelo
let op = db.Sequelize.Op;

const controller = {
    // index: function(req,res){
    //     res.send('Mando los prods')
    // },

     findAll: (req, res) => {

         products.findAll()
         //{
    //         order:[['createdAt', 'DESC']],
    //         limit: 5
    //     })
        .then(function (result) {
             return res.render('product', { listaProductos: result });   
         }).catch(function (err){
             console.log(err);
         });
     },

    // show anterior show: function(req,res){
      // return res.render('product', {
      //  usuarioLogueado: false,
      //  comentario: data.comentario,
      // })
      //},

    show: (req,res) => {
        let id = req.params.id;

        /*let rel = {
            include: [
                {association: "usuario"}
            ]
        }*/

        
        products.findByPk(id)
        .then(function(result){


            return res.render('product', {
                product: result,
                usuarioLogueado: true, // esto se sustituye con el locals
            })

        })
        .catch(function(err){
            console.log(err)
        });     
  
    },

    resultado: (req, res) => {
        let busqueda = req.query.producto;

        producto.findAll({
            where: [{
                title: {[op.like]: `%${busqueda}%`}
            }]
        })
        .then(function(result){
            return res.render('busqueda', {listaProductos : result})

        })
        .catch(function(err){
            console.log(err)
        });
    },

    //  agregar: function(req,res){
    //        return res.render('product-add', {
    //        usuarioLogueado: true,
    //        users: data.users,
    //        })
    //
    //    }, 

    showForm: (req,res) => {
        if (req.session.user != undefined) {
            return res.render('product-add');
         } else {
        return res.redirect ('/users/login');
        }
    },

    store: (req,res) => {
        let info = req.body;
        products.create(info)
        .then((result) => {
            return res.redirect('/productos/') 
        }).catch((error) => {
            console.log(error)
        });
        
    }
 

}



module.exports = controller


