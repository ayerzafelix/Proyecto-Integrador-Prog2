// Es una función que recibe dos parametros

module.exports = function(sequelize, dataType){

    // Crear 3 variables 

    let alias = "Comentario" ; // Un apodo para requerirlo en los controllers 


    // Mapeo exacto de cada una de las columnas
    let cols = {
            comentario_id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            posteo_id:{
                type: dataTypes.INTEGER,
            },
            usuariocomentario_id:{
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
        tableName: 'info_comentarios', // Nombre de la tabla 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    
    const Comments = sequelize.define(alias, cols, config);

    return Comments;
};