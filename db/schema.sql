DROP DATABASE IF EXISTS cms;    
CREATE DATABASE cms;
USE cms;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE department (
    id INTEGER(8) AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INTEGER(3) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INTEGER, -- reference to department to which role belongs
    PRIMARY KEY(id)
);

CREATE TABLE employees (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER, -- reference to another employee who serves as manager for this employee
    PRIMARY KEY(id)
);
