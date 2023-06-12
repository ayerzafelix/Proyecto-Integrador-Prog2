const db = require('../database/models')
const product = db.Product;


const controller = {
    index: function(req, res){

        let rel = {
            include: [{
                association: "usuario"
            }]
        }

        product.findAll(rel)
        .then(function(result) {

            res.render('index', {
                productos: result,
                usuario: result,
                comentario: result,
            })
        }).catch(function(error) {
            
        });

        
    }
    

}


module.exports = controller