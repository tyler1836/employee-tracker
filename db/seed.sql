-- department table
INSERT INTO department (dept) VALUES ('sales');
INSERT INTO department (dept) VALUES ('engineering');
INSERT INTO department (dept) VALUES ('finance');
INSERT INTO department (dept) VALUES ('legal');

-- role table
INSERT INTO role (title, salary, dept_id) VALUES ('IT', 90000, 1);
INSERT INTO role (title, salary, dept_id)  VALUES ('Engineer', 90000, 2);
INSERT INTO role (title, salary, dept_id)  VALUES ('Accountant', 85000, 3);

-- employee table
INSERT INTO employee (first_name, last_name, role_id) values ('Cassandra', 'Parkin', 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Kendyl', 'K', 2, 1);
INSERT INTO employee (first_name, last_name, role_id) values ('Tyler', 'Ryan', 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Taylor', 'Jayde', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Austin', 'A', 1, 1);