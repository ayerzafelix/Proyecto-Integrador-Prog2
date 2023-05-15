// Es una función que recibe dos parametros

module.exports = function(sequelize, dataTypes){

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
                type: dataTypes.INTEGER,
            },
            producto:{
                type: dataTypes.STRING(80),
            },
            descripcion:{
                type: dataTypes.TEXT(),
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


    // crear relaciones

   /* Products.associate = function(models) {
   
            Movie.belongsTo(models.Genre , {
                as: "genre",
                foreingKey : "genre_id"
            }),
            Movie.belongsToMany( models.Comentario , {
                as: "Comments",
                through: "tabla pivot HAY Q HACERLA",
                foreingKey: "producto_id",
                otherKey: "comentario_id",
                timestamps:  false
            } )
       }; */


    return Products;
};


