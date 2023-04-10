const data = require('../data/data')

const controller = {
    index: function(req,res){
        res.send('Mando los prods')
    },

    show: function(req,res){
       return res.render('product', {
        usuarioLogueado: false,
        users: data.users,
       })
  
    },

    agregar: function(req,res){
        return res.render('product-add', {
         usuarioLogueado: true,
         users: data.users,
        })
   
     }
 

}

//  <!-- ??????? --> <!-- ??????? --> <!-- ??????? --> <!-- ??????? --> <!-- ??????? --> <!-- ??????? -->

module.exports = controller


