const data = require('../data/data')
const usuarios = data.Usuario; //el alias de usuario.js

const controller = {
    login: function(req, res) {
        res.render('login', {
            usuarioLogueado: false,

        });
    },

    loginPost: function(req,res){
        let emailBuscado = req.body.email;
        let pass = req.body.password;

        let filtrado = {
            where: [{email: emailBuscado}]
        };
        user.findOne(filtrado)
        .then((result) => {

            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(pass, result.password)
                if (claveCorrecta) {
                    // un usuario en session
                    req.session.user = result.dataValues;
                    res.redirect('/')
 
                    
                    if (req.body.rememberme != undefined) {
                        res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15})
                    }

                    return res.redirect("/"); 

                    
                } else {
                    return res.send("Existe el mail y pero la password es incorrecta");
                }
            } else {
                return res.send("No existe el mail")
            }
            
        }).catch((err) => {
            console.log(err);
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
            comentario: data.comentario
            
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