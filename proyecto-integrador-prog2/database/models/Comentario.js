// Es una función que recibe dos parametros

module.exports = function(sequelize, dataTypes){

    // Crear 3 variables 

    let alias = "Comentario" ; // Un apodo para requerirlo en los controllers 


    // Mapeo exacto de cada una de las columnas
    let cols = {
            id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            productoId:{
                type: dataTypes.INTEGER,
            },
            UsuarioId:{
                type: dataTypes.INTEGER,
            },
            comentario:{
                type: dataTypes.STRING,
            },
            createdAt:{
                type: dataTypes.DATE,
            },
            updatedAt:{
                type: dataTypes.DATE,
            },
            
        }


        // Obj literal para configurar la tabla
    let config =  {
        tableName: 'infoComentarios', // Nombre de la tabla 
        timestamps: true, //Si la tabla no tiene los campos createdAt y updatedAt
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    
    const Comments = sequelize.define(alias, cols, config);

    
   // Crear relaciones 
   Comments.associate = function(models) {

        Comments.belongsTo(models.Product , {
            as: "product",
            foreingKey : "productoId"
        })

        Comments.belongsTo(models.Usuario , {
            as: "usuario",
            foreingKey : "usuarioId"
        })
   };


    return Comments;
};