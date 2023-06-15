const db = require('../database/models')
const Producto = db.Producto;



const controller = {
    index: function(req,res){

       // let rel = {
       //     include: [{
       //         association: "usuario"
       //     }]
        

        Producto.findAll({
                include: {
                    all:true,
                    nested: true
                },
                order: [
                    ['createdAt', 'DESC'],
                ]
            })
        .then(function(result) {

            return res.render('index', {
                productos: result,
                usuario: result,
                comentario: result,
            })
        }).catch(function(error) {
            console.log(error);
       });
    },

    logout: function(req, res){
        req.session.user = undefined
        req.session.destroy()

        res.clearCookie('userId')
        res.redirect('/')
        
    }
    

}


module.exports = controller