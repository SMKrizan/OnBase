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
    dept_id INTEGER,
    -- establishes department id as foreign key to role; value auto-updates and preserved upon deletion
    FOREIGN KEY (dept_id) REFERENCES department(id) 
    ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY(id)
);

CREATE TABLE employees (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    -- establishes employee id of manager as foreign key to employee; value set to null upon deletion
    FOREIGN KEY (manager_id) REFERENCES employees(id)
    ON DELETE SET NULL,
    -- establishes role id as foreign key to employee; value auto-updates and preserved upon deletion
    FOREIGN KEY (role_id) REFERENCES roles(id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY(id)
);
