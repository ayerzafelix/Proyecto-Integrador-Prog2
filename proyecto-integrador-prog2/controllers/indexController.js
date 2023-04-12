const data = require('../data/data')

const controller = {
    index: function(req, res){
        res.render('index', {
            productos: data.productos,
            users: data.users,
            usuarioLogueado: true,
            comentario: data.comentario
        })
    }
    

}


module.exports = controller