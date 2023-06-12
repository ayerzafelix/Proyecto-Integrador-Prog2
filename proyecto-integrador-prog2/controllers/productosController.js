const db = require('../database/models')
const products = db.Product; // Alias del modelo
let op = db.Sequelize.Op;

const controller = {
     findAll: (req, res) => {

         products.findAll()
         //{
    //         order:[['createdAt', 'DESC']],
    //         limit: 5
    //     })
        .then(function(result) {
             return res.render('product', { listaProductos: result });   
         }).catch(function (err){
             console.log(err);
         });
     },

    show: (req,res) => {

        //Filtrar por Pk

        let id = req.params.id;
        products.findByPk(id)
        .then(function(result){
            return res.render('product', {
                product: result,
            })
        })
        .catch(function(err){
            console.log(err)
        });     
  
        /*let rel = {
            include: [
                {association: "usuario"}
            ]
        }*/ 
    },

    resultado: (req, res) => {
        let busqueda = req.query.producto;

        products.findAll({
            where: [{
                title: {[op.like]: `%${busqueda}%`}
            },]
        })
        .then(function(result){
            return res.render('busqueda', {productos: result})

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


