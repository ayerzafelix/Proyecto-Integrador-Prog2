const data = require('../database/models')
const products = data.Product; // Alias del modelo
const comments = data.Comentario
let op = data.Sequelize.Op;

const controller = {
    // index: function(req,res){
    //     res.send('Mando los prods')
    // },

    // findAll: (req, res) => {

    //     products.findAll({
    //         order:[['createdAt', 'DESC']],
    //         limit: 5
    //     })
    //     .then(function (result) {
    //         return res.render('product', { listaProductos: result });   
    //     }).catch(function (err){
    //         console.log(err);
    //     });
    // },

    // show anterior show: function(req,res){
      // return res.render('product', {
      //  usuarioLogueado: false,
      //  comentario: data.comentario,
      // })
  
    // },

    show: (req,res) => {
        let id = req.params.id;

        let rel = {
            include: [
                {association: "pedro"}
            ]
        }

        
        products.findByPk(id, rel)
        .then(function(result){

            return res.send(result)
            return res.render('product', {
                producto: result,
                usuarioLogueado: true, // esto se sustituye con el locals
                comentarios: comentarios  //[1,2,3,4,5,5] // El array de comentarios traidos de la base de datos
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

    agregar: function(req,res){
        return res.render('product-add', {
         usuarioLogueado: true,
         users: data.users,
        })
   
     },

    showForm: (req,res) => {
        return res.render('register ')
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


