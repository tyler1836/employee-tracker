DROP DATABASE IF EXISTS team;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE DATABASE team;
USE team;


CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(5, 2) NOT NULL,
    department_id INTEGER NOT NUll,
    FOREIGN KEY (department_id)  REFERENCES department(id)
);

CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id),
    foreign key (manager_id) references employee(id)
);