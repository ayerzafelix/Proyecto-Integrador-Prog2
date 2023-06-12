const db = require('../database/models')
const Product = db.Product;



const controller = {
    index: function(req,res){

       // let rel = {
       //     include: [{
       //         association: "usuario"
       //     }]
        

        Product.findAll()
        .then(function(result) {

            return res.render('index', {
                productos: result,
                usuario: result,
                comentario: result,
            })
        }).catch(function(error) {
            console.log(error);
       });
    },
    

}


module.exports = controller