--creating DB
CREATE DATABASE javascriptcrud;
--utilizando la DB
use javascriptcrud;
--Create table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);
--TO SHOW ALL TABLES
SHOW TABLES;
--TO DESCRIBE TABLE STRUCTURE
describe customer;
