DROP DATABASE IF EXISTS cms;    
CREATE DATABASE cms;
USE cms;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER(8) AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INTEGER(3) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INTEGER,
    -- establishes departments id as foreign key to role
    FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employees (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    -- establishes role id as foreign key to employee
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    -- establishes employee id of manager as foreign key to employee
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL,
    PRIMARY KEY(id)
);
