// Es una función que recibe dos parametros

module.exports = function(sequelize, dataType){

    // Crear 3 variables 

    let alias = "Product" ; // Un apodo para requerirlo en los controllers 


    // Mapeo exacto de cada una de las columnas
    let cols = {
            producto_id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            usuario_id:{
                type: dataTypes.INTEGRTER,
            },
            producto:{
                type: dataTypes.STRING(80),
            },
            descripcion:{
                type: dataTypes.TEXT(medium),
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
        tableName: 'info_productos', // Nombre de la tabla 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    
    const Products = sequelize.define(alias, cols, config);

    return Products;
};