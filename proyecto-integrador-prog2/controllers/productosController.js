const controller = {
    index: function(req,res){
        res.send('Mando los prods')
    },

    show: function(req,res){
       return res.render('product', {
        usuarioLogueado: false
       })
  
    },

    agregar: function(req,res){
        return res.render('product-add', {
         usuarioLogueado: false
        })
   
     }
 

}

//  <!-- ??????? --> <!-- ??????? --> <!-- ??????? --> <!-- ??????? --> <!-- ??????? --> <!-- ??????? -->

module.exports = controller


