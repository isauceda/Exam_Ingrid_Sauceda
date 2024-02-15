-- Active: 1706152269886@@127.0.0.1@5432@api_cliente
create table tbl_cliente
(
    Id serial primary key ,
    nombre varchar (200),
    Apellido VARCHAR (200),
    Direccion varchar (200),
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_cliente
(nombre, apellido, direccion)
values
('Ingrid','Sauceda','col.mateo'),
('Jose','Amador','col.Miramontes');

select * from tbl_cliente