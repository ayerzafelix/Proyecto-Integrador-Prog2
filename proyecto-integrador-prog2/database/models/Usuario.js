// Es una función que recibe dos parametros

module.exports = function(sequelize, dataTypes){

    // Crear 3 variables 

    let alias = "Usuario" ; // Un apodo para requerirlo en los controllers 


    // Mapeo exacto de cada una de las columnas
    let cols = {

            id:{autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            nombreUsuario:{
                type: dataTypes.STRING(30),
            },
            mail:{
                type: dataTypes.STRING(60),
            },
            pass:{
                type: dataTypes.STRING(150),
            },
            fotoPerfil:{
                type: dataTypes.STRING(100),
            },
            fecha:{
                type: dataTypes.DATE,
            },
            DNI:{
                type: dataTypes.INTEGER
            },
            createdAt:{
                type: dataTypes.DATE
            },
            updatedAt:{
                type: dataTypes.DATE
            },
            
        }


        // Obj literal para configurar la tabla
    let config =  {
        tableName: 'infoUsuario', // Nombre de la tabla 
        timestamps: true, //Si la tabla no tiene los campos createdAt y updatedAt
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    
    const Usuarios = sequelize.define(alias, cols, config);

//Relacion

     Usuarios.associate = function (models) {

        Usuarios.hasMany(models.Producto,{
        as:"producto",
        foreingKey:"usuarioId"
      })  

        Usuarios.hasMany(models.Comentario,{
        as:"comentarios",
        foreingKey:"usuarioId"
      }) 
    }; 
    



    return Usuarios;
};