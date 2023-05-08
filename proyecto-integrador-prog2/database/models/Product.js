// Es una función que recibe dos parametros

module.exports = function(sequelize, dataType){

    // Crear 3 variables 

    let alias = "Product" ; // Un apodo para requerirlo en los controllers 


    // Mapeo exacto de cada una de las columnas
    let cols = {
            id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            title:{
                type: dataTypes.STRING,
            },
            rating:{
                type: dataTypes.DECIMAL,
            },
            awards:{
                type: dataTypes.INTEGER,
            },
            release_date:{
                type: dataTypes.DATE,
            },
            length:{
                type: dataTypes.INTEGER,
            },
            genre_id:{
                type: dataTypes.INTEGER,
            }
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