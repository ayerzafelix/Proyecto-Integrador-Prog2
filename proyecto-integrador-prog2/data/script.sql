create schema base_de_datos;


use base_de_datos;


CREATE TABLE infoUsuario (


id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombreUsuario VARCHAR(30) NOT NULL,
mail VARCHAR(60) NOT NULL UNIQUE,
pass VARCHAR(150) NOT NULL,
fotoPerfil VARCHAR(1000) NOT NULL,
fecha DATE NOT NULL,
DNI INT NOT NULL UNIQUE,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE infoProductos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
usuarioId INT UNSIGNED,
producto VARCHAR(80) NOT NULL,
fotoProducto VARCHAR (200),
descripcion TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,


FOREIGN KEY (usuarioId) REFERENCES infoUsuario(id)
);


CREATE TABLE infoComentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
productoId INT UNSIGNED,
usuarioId INT UNSIGNED,
comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,


FOREIGN KEY (productoId) REFERENCES infoProductos(id),
FOREIGN KEY (usuarioId) REFERENCES infoUsuario(id)
);


insert into infoUsuario (nombreUsuario, mail, pass, fotoPerfil, fecha, DNI) values
('Ruben Dario Insua', 'rubeninsua@gmail.com', 'pass000', '/images/users/insua.jpg', '2004-06-08', 45766322 ),
('0800Cj', '0800cj@gmail.com', 'pass001', '/images/users/0800.jpg', '2003-07-02', 45766000 ),
('Frabigol', 'frabigol@gmail.com', 'pass002', '/images/users/frabigol.jpg', '2002-08-09', 42233576 ),
('Osvaldo', 'osvaldo@gmail.com', 'pass003', '/images/users/osvaldo.jpg', '2001-09-01', 41555899 ),
('ValencasIa', 'valencasla@gmail.com', 'pass004', '/images/users/valen.jpg', '2000-11-11', 32233111 )
;


insert into infoProductos (usuarioId, producto, fotoProducto, descripcion) values
(1, 'CBO', "/images/productos/Cbo.jpg", 'Deliciosa hamburguesa con tus tres ingredientes favoritos: Chicken, Bacon, Onion. Delicioso pollo, crujiente bacon y el sabor sorprendente de nuestro crispy onion, con lechuga, queso cheddar, una salsa original y un pan único.'),
(2, 'Big Mac', "/images/productos/bigMac.jpg", 'Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.'),
(3, 'Gran Tasty Doble', "/images/productos/grandTastyDoble.jpg", 'Inigualable pan con semillas de sésamo, dos medallones de carne 100% vacuna, dos fetas de nuestro exclusivo Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado a estos ingredientes la única e inigualable Salsa Tasty, un exclusivo sabor McDonald’s.'),
(4, 'Hamburguesa Con Queso', "/images/productos/hamburguesaConQueso.jpg", 'Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.'),
(5, 'Ensalada Deli con Crispy', "/images/productos/ensalada.jpg", 'Hecho especialmente para vos. Ensalada con ingredientes tradicionales: tomate, lechuga, cebolla fresca y el más delicioso pollo crispy. Una exquisita combinación entre los vegetales, texturas croacantes y un dressing.'),
(5, 'Mc Wrap', "/images/productos/Mcwrap.jpg", 'Un crujiente pollo crispy, acompañado con cebolla, tomate, lechuga, mostaza y mayonesa. Y por supuesto, todo envuelto en una masa suave y liviana.'),
(5, 'McFlurry', "/images/productos/mcflurry.jpg", 'Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.'),
(5, 'Wrap', "/images/productos/mcWrapVerde.jpg", 'Un crujiente pollo crispy, acompañado tomate, lechuga, mostaza y mayonesa. Y por supuesto, todo envuelto en una masa suave y liviana.'),
(4, 'McFiesta', "/images/productos/mcfiesta.jpg", 'Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga, tomate.'),
(3, 'Nuggets', "/images/productos/nuggets.jpg", 'Hechos de carne blanca de pollo sin colorantes, sabores ni conservantes artificiales.'),
(2, 'Mc Nifica', "/images/productos/mcnifica.jpg", 'En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.'),
(1, 'Doble Cuarto de Libra con Queso', "/images/productos/cuartodelibra.jpg", 'Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.')
;


insert into infoComentarios (productoId, usuarioId, comentario) values
(1,1, 'Riquisima'),
(1,2, 'Muy jugosa'),
(1,3, 'Es fea. No supero expectativas'),
(1,4, 'Le doy un diez'),
(2,5, 'Es demasiado rico esto'),
(2,4, 'Me llego frio'),
(2,3, 'Lo super recomiendo'),
(2,2, 'Gran menu'),
(3,1, 'Flojisimo'),
(3,2, 'Me encanto'),
(3,3, 'No puede ser mas rico'),
(3,4, 'No lo recomiendo para nada la verdad'),
(4,4, 'Delicioso'),
(4,5, 'Excelente'),
(4,3, 'Lo amo'),
(4,1, 'Es top'),
(5,4, 'Grandioso'),
(5,3, 'Verdaderamente fantastico'),
(5,2, 'Espelusnante'),
(5,1, 'Una porqueria'),
(6,2, 'De pelos'),
(6,3, 'Esperaba menos'),
(6,4, 'Gracias por el trato'),
(6,5, 'No volveria'),
(7,4, 'Me copa'),
(7,3, 'Esta buenisimo'),
(7,2, 'No me gusto'),
(7,1, 'Gracias por todo'),
(8,5, 'Wow que rico'),
(8,2, 'Ocho puntos'),
(8,1, 'Me desilusionaron'),
(8,4, 'Me fascino'),
(9,3, 'Demasiado empalagoso'),
(9,5, 'Es ideal para mi'),
(9,1, 'Me lo comi todo'),
(9,2, 'Muy grande'),
(10,1, 'Garndioso'),
(10,2, 'Un papelon este producto'),
(10,4, 'Lo quiero comprar otra vez'),
(10,5, 'Los felicito'),
(11,1, 'Wow epico'),
(11,2, 'Que rico!!'),
(11,3, 'Muy bueno'),
(11,4, 'No la banqué'),
(12,1, 'La mejor q probe en mi vidaaaa'),
(12,2, 'Es un 10!! Me sorprendió'),
(12,3, 'Me la dieron cruda!! Como les da la cara??'),
(12,4, "Que buena hamburguesaa!")
;