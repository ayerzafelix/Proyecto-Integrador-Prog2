const db = require('../database/models')
const usuarios = db.Usuario; //el alias de usuario.js
const bcrypt = require('bcryptjs');

 


 const controller = {

    create: function(req, res) {
        return res.render('register')
    },

    store: function (req, res) {
        let errors = {};

        if (req.body.mail == '') {
            errors.message = 'El email no debe estar vacio';
            res.locals.errors = errors;
            return res.render('register')
        } else if(req.body.pass == '') {
            errors.message = 'La clave no debe estar vacia';
            res.locals.errors = errors;
            return res.render('register')
        } else {
            let info = req.body;

            let userStore = {
                nombreUsuario : info.nombreUsuario,
                mail : info.mail,
                pass : bcrypt.hashSync(info.pass, 10),
                fotoPerfil: info.fotoPerfil,
                fecha: info.fecha,
                DNI: info.DNI,
                
            }
            
            usuarios.create(userStore)
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
        let mailBuscado = req.body.mail;
        let pass = req.body.pass;

        let filtrado = {
            where: [{mail: mailBuscado}]
        };
        usuarios.findOne(filtrado)

        .then((result) => {

            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(pass, result.pass)
                if (claveCorrecta) {
                    // Poner un usuario en session
                    req.session.user = result.dataValues;
                    
 
                    
                    if (req.body.rememberme != undefined) {
                        res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15})
                    }

                    return res.redirect("/"); 

                    
                } else {
                    return res.send("Existe el mail pero la password es incorrecta");
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
            productos: db.productos,
            users: db.users,
            comentario: db.comentario
            
        })
    },

    profileId: function(req,res){
        let id = req.params.id;
        let rel = {
            include: {
                all:true,
                nested: true
            },
        }
        usuarios.findByPk(id,rel)
         .then(function(result){
            return res.render('profile',{
                users: result,
               
            })        
        })
        .catch(function(error){
            console.log(error);
        });
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

    producto: function(req, res) {
        res.render('producto', {
            users: data.users,
            

        });
    }

}

module.exports = controller