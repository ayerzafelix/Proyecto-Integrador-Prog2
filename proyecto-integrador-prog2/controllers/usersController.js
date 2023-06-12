const data = require('../data/data')
const usuarios = data.Usuario; //el alias de usuario.js
const bcrypt = require('bcryptjs');

 


 const controller = {

    create: function(req, res) {
        return res.render('register')
    },

    store: function (req, res) {
        let errors = {};

        if (req.body.email == '') {
            errors.message = 'El email no debe estar vacio';
            res.locals.errors = errors;
            return res.render('register')
        } else if(req.body.password == '') {
            errors.message = 'La clave no debe estar vacia';
            res.locals.errors = errors;
            return res.render('register')
        } else {
            let info = req.body;

            let userStore = {
                nombreUsuario : info.name,
                mail : info.mail,
                pass : bcrypt.hashSync(info.contrasena, 10),
            }
            
            user.create(userStore)
            .then(function(result) {
                return res.redirect('/users/login');
            })
            .catch(function (error) {
                console.log(error);
                
            })
            
        }
    }, 

    login: function(req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },

    loginPost: function(req,res){
        let emailBuscado = req.body.email;
        let pass = req.body.password;
        let filtrado = {
            where: [{email: emailBuscado}]
        };
        usuarios.findOne(filtrado)

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
        res.render('register');
    },
    profile: function(req, res){
        res.render('profile', {
            productos: data.productos,
            users: data.users,
            comentario: data.comentario
            
        })
    },
    edit: function(req, res) {
        res.render('edit-profile', {
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