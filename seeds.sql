INSERT INTO department(name)
VALUES 
    ('marketing'),
    ('development'),
    ('management');


INSERT INTO role(title, salary, department_id)
VALUES
('hourly', 10.00, 1),
('Devs', 50000.00, 2),
('management', 85000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Tyler', 'Roll', 1),
('Jacob', 'Dolph', 3),
('Samantha', 'Peterson', 2),
('Cassandra', 'Addle', 2),
('Kendyl', 'Masquerade', 3);