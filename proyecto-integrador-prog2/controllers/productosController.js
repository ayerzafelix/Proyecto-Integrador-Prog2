const data = require('../database/models')
const products = data.Product; // Alias del modelo

const controller = {
    index: function(req,res){
        res.send('Mando los prods')
    },

    show: function(req,res){
       return res.render('product', {
        usuarioLogueado: false,
        comentario: data.comentario,
       })
  
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


