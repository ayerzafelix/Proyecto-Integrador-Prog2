// Es una función que recibe dos parametros

module.exports = function(sequelize, dataTypes){

    // Crear 3 variables 

    let alias = "Product" ; // Un apodo para requerirlo en los controllers 


    // Mapeo exacto de cada una de las columnas
    let cols = {
            productoId:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            usuarioId:{
                type: dataTypes.INTEGER,
            },
            producto:{
                type: dataTypes.STRING(80),
            },
            fotoProducto:{
                type: dataTypes.STRING(),
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
        tableName: 'infoProductos', // Nombre de la tabla 
        timestamps: true, //Si la tabla no tiene los campos createdAt y updatedAt
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    
    const Products = sequelize.define(alias, cols, config);


    // crear relaciones

   /* Products.associate = function(models) {
   
            Movie.belongsTo(models.Genre , {
                as: "genre",
                foreingKey : "genreId"
            }),
            Movie.belongsToMany( models.Comentario , {
                as: "Comments",
                through: "tabla pivot HAY Q HACERLA",
                foreingKey: "productoId",
                otherKey: "comentarioId",
                timestamps:  false
            } )
       }; */


    return Products;
};


