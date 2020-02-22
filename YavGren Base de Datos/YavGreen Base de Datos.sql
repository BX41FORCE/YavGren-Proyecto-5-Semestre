CREATE DATABASE YavGreen;

USE YavGreen;
/*Importante colocar la clave de ingreso de mysql en la siquiente línea*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
flush privileges;

CREATE TABLE Roles (
id_rol int auto_increment not null,
descripcion_rol varchar (100),
PRIMARY KEY (id_rol)
);

CREATE TABLE Personas(
id_persona int auto_increment not null,
nombre_persona varchar (50) not null,
apellido_persona varchar (50) not null,
correo_persona varchar (100) not null,
password_persona text not null,
puntaje_persona int not null,
id_rol_persona int not null,
PRIMARY KEY (id_persona),
FOREIGN KEY (id_rol_persona) REFERENCES Roles(id_rol)
);

CREATE TABLE Imagenes(
id_imagen int auto_increment not null,
nombre_imagen varchar(200),
tipo_imagen varchar(200),
contenido_imagen longtext,
PRIMARY KEY (id_imagen)
);

CREATE TABLE Eventos(
id_evento int auto_increment not null,
nombre_evento varchar (200) not null,
fecha_evento date not null,
lugar_evento varchar (200) not null,
objetivo_evento longtext not null,
puntaje_evento int not null,
codigo_evento varchar (50) not null,
id_persona_evento int not null,
id_imagen_evento int not null,
PRIMARY KEY(id_evento),
FOREIGN KEY (id_persona_evento) REFERENCES Personas(id_persona),
FOREIGN KEY (id_imagen_evento) REFERENCES Imagenes(id_imagen)
);

CREATE TABLE Noticias(
id_noticia int auto_increment not null,
nombre_noticia varchar(100) not null,
descripcion_noticia varchar(250),
id_noticia_persona int not null,
id_imagen_noticia int not null,
PRIMARY KEY (id_noticia),
FOREIGN KEY (id_noticia_persona) REFERENCES Personas(id_persona),
FOREIGN KEY (id_imagen_noticia) REFERENCES Imagenes(id_imagen)
);

CREATE TABLE Productos(
id_producto int auto_increment not null,
nombre_producto varchar (150) not null,
descripcion_producto varchar (250)not null,
costo_puntos_producto int not null,
id_imagen_producto int not null,
PRIMARY KEY (id_producto),
FOREIGN KEY (id_imagen_producto) REFERENCES Imagenes(id_imagen)
);

CREATE TABLE Canjes(
id_canje int auto_increment not null,
fecha_canjeo date not null,
id_persona_canje int not null,
id_producto_canje int not null,
PRIMARY KEY (id_canje),
FOREIGN KEY (id_persona_canje) REFERENCES Personas(id_persona),
FOREIGN KEY (id_producto_canje) REFERENCES Productos(id_producto)
);