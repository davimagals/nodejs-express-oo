CREATE DATABASE clinica_veterinaria;

USE clinica_veterinaria;

CREATE TABLE animal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    especie VARCHAR(30) NOT NULL,
    raca VARCHAR(20),
    data_nasc DATE,
    peso FLOAT
);