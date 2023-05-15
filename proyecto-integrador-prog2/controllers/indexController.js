const data = require('../data/data')
const db = require('../database/models')
const product = db.Product
const controller = {
    index: function(req, res){


        product.findAll()
        .then(function(result) {
            res.render('index', {
                productos: result,
                users: data.users,
                usuarioLogueado: true,
                comentario: data.comentario
            })
        }).catch(function(error) {
            
        });

        
    }
    

}


module.exports = controller