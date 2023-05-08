// Es una función que recibe dos parametros

const data = require("../../data/data");

module.exports = function(sequelize, dataType){

    // Crear 3 variables 

    let alias = "Product" ; // Un apodo para requerirlo en los controllers 


    // Mapeo exacto de cada una de las columnas
    let cols = {



            usuario_id:{autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,},
            
            nombre_usuario:{
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
        tableName: 'info_usuario', // Nombre de la tabla 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    
    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;
};