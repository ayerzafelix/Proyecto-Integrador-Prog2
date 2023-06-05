const data = require('../data/data')
const db = require('../database/models')
const product = db.Product
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
                users: data.users,
                usuarioLogueado: true,
                comentario: data.comentario
            })
        }).catch(function(error) {
            
        });

        
    }
    

}


module.exports = controller