const controller = {
    login: function(req, res) {
        res.render('login', {
            usuarioLogueado: false
        });
    },
    register:  function(req, res) {
        res.render('register', {
            usuarioLogueado: false
        });
    },
    profile:  function(req, res) {
        res.render('profile', {
            usuarioLogueado: true,

        });
    },
    edit: function(req, res) {
        res.render('edit-profile', {
            usuarioLogueado: true,

        })
    }, 

    header: function(req, res) {
        res.send('header', {

        });
    },

    product: function(req, res) {
        res.render('product', {

            
        });
    }

}


module.exports = controller