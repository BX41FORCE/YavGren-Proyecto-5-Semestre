CREATE DATABASE YavGreen;

USE YavGreen;

CREATE TABLE Personas(
id_persona int not null,
nombre_persona varchar (50) not null,
apellido_persona varchar (50) not null,
correo_persona varchar (100) not null,
password_persona varchar (50) not null,
puntaje_persona int not null,
PRIMARY KEY (id_persona)
);

CREATE TABLE Eventos(
id_evento int not null,
nombre_evento varchar (200) not null,
fecha_evento date not null,
lugar_evento varchar (200) not null,
objetivo_evento varchar (200) not null,
puntaje_evento int not null,
id_persona_evento int not null,
PRIMARY KEY(id_evento),
FOREIGN KEY (id_persona_evento) REFERENCES Personas(id_persona)
);

CREATE TABLE Noticias(
id_noticia int not null,
nombre_noticia varchar(100) not null,
descripcion_noticia varchar(250),
PRIMARY KEY (id_noticia)
);
CREATE TABLE Productos(
id_producto int not null,
nombre_producto varchar (150) not null,
descripcion_producto varchar (250)not null,
costo_puntos_producto int not null,
PRIMARY KEY (id_producto)
);

CREATE TABLE Canje(
id_canje int not null,
id_persona_canje int not null,
id_producto_canje int not null,
PRIMARY KEY (id_canje),
FOREIGN KEY (id_persona_canje) REFERENCES Personas(id_persona),
FOREIGN KEY (id_producto_canje) REFERENCES Productos(id_producto)
)