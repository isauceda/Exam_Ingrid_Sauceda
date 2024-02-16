-- Active: 1706152269886@@127.0.0.1@5432@api_cliente


create table tbl_poliza
(
 id serial primary key,
    poliza varchar (200),
    creado TIMESTAMP DEFAULT current_timestamp
)

create table tbl_cliente
(
    Id serial primary key ,
    nombre varchar (200),
    Apellido VARCHAR (200),
    Direccion varchar (200),
    id_poliza int REFERENCES  tbl_poliza (id),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_agentes
(
    id serial primary key,
    nombre_agente varchar (200),
    valor_prima NUMERIC,
    fecha_ingreso TIMESTAMP DEFAULT current_timestamp
);

create table tbl_pagos
(
    id serial primary key,
    fecha_pago NUMERIC,
    monto NUMERIC
    id_poliza int REFERENCES  tbl_poliza (id),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_beneficiarios
(
    id serial primary key,
    nombre varchar (200),
    Apellido VARCHAR (200),
    id_poliza int REFERENCES  tbl_poliza (id),
    creado TIMESTAMP DEFAULT current_timestamp
)

