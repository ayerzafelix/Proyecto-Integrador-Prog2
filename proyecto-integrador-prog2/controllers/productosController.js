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
   
     }
 

}



module.exports = controller


