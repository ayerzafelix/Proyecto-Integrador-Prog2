const data = require('../data/data')

const controller = {
    login: function(req, res) {
        res.render('login', {
            usuarioLogueado: false,

        });
    },
    register:  function(req, res) {
        res.render('register', {
            usuarioLogueado: false,


        });
    },
    profile: function(req, res){
        res.render('profile', {
            productos: data.productos,
            users: data.users,
            usuarioLogueado: true,
            
        })
    },
    edit: function(req, res) {
        res.render('edit-profile', {
            usuarioLogueado: true,
            users: data.users,

        })
    }, 

    header: function(req, res) {
        res.send('header', {

        });
    },

    product: function(req, res) {
        res.render('product', {
            users: data.users,

            
        });
    }

}


module.exports = controller