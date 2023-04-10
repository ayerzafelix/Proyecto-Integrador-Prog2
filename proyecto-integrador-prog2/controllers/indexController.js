const data = require('../data/data')

const controller = {
    index: function(req, res){
        res.render('index', {
            productos: data.productos,
            usuarioLogueado: false,
            
        })
    }
}

module.exports = controller