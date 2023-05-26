create schema base_de_datos;

use base_de_datos;

CREATE TABLE infoUsuario (
	usuarioId  INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombreUsuario VARCHAR(30) NOT NULL,
	mail VARCHAR(60) NOT NULL UNIQUE,
    pass VARCHAR(150) NOT NULL,
    fotoPerfil VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    DNI INT NOT NULL UNIQUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE infoProductos (
	productoId  INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    usuarioId INT UNSIGNED,
	producto VARCHAR(80) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR (200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE infoComentarios (
	comentarioId  INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    posteoId INT UNSIGNED,
    usuariocomentarioId INT UNSIGNED,
	comentario TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into infoUsuario (nombreUsuario, mail, pass, fotoPerfil, fecha, DNI) values
('Ruben Dario Insua', 'rubeninsua@gmail.com', 'pass000', '/images/users/insua.jpg', '2004-06-08', 45766322 ),
('0800Cj', '0800cj@gmail.com', 'pass001', '/images/users/0800.jpg', '2003-07-02', 45766000 ),
('Frabigol', 'frabigol@gmail.com', 'pass002', '/images/users/frabigol.jpg', '2002-08-09', 42233576 ),
('Osvaldo', 'osvaldo@gmail.com', 'pass003', '/images/users/osvaldo.jpg', '2001-09-01', 41555899 ),
('ValencasIa', 'valencasla@gmail.com', 'pass004', '/images/users/valen.jpg', '2000-11-11', 32233111 )
;

insert into infoProductos (usuarioId, fotoProducto, producto, descripcion) values
(1, 'CBO', "Cbo.jpg", 'Deliciosa hamburguesa con tus tres ingredientes favoritos: Chicken, Bacon, Onion. Delicioso pollo, crujiente bacon y el sabor sorprendente de nuestro crispy onion, con lechuga, queso cheddar, una salsa original y un pan único.'),
(2, 'Big Mac', "bigMac.jpg", 'Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.'),
(3, 'Gran Tasty Doble', "grandTastyDoble.jpg", 'Inigualable pan con semillas de sésamo, dos medallones de carne 100% vacuna, dos fetas de nuestro exclusivo Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado a estos ingredientes la única e inigualable Salsa Tasty, un exclusivo sabor McDonald’s.'),
(4, 'Hamburguesa Con Queso', "hamburguesaConQueso.jpg", 'Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.'),
(5, 'Club House', "clubHouse.jpg", 'Incluye un nuevo pan artesanal tipo brioche, bacon rústico, cebolla grillada, queso cheddar suave, rodajas de tomate, lechuga y una salsa especial'),
(5, 'Nuggets', "nuggets.jpg", 'Hechos de carne blanca de pollo sin colorantes, sabores ni conservantes artificiales.'),
(4, 'Mc Nifica', "mcnifica.jpg", 'En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.'),
(3, 'Mc Wrap', "Mcwrapp.jpg", 'Un crujiente pollo crispy, acompañado con cebolla, tomate, lechuga, mostaza y mayonesa.  Y por supuesto, todo envuelto en una masa suave y liviana.'),
(2, 'Hamburguesa Con Cheddar', "", 'Carne 100% vacuna, queso derretido, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.'),
(1, 'Wrap', "", 'Un crujiente pollo crispy, acompañado tomate, lechuga, mostaza y mayonesa.  Y por supuesto, todo envuelto en una masa suave y liviana.')
;

insert into infoComentarios (posteoId, usuariocomentarioId, comentario) values
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
(10,5, 'Los felicito')
;
