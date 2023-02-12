drop database if exists trackerDB;

CREATE DATABASE trackerDB;
USE trackerDB;

-- CREATE TABLE department (
--     id INT PRIMARY KEY,
--     name VARCHAR(30)
-- );

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_ID INT
);
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
);