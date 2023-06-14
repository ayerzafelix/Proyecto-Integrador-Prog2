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
            }})
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
    

}


module.exports = controller