use employee_db;

INSERT INTO departments (name) VALUES ('Human Resources'), ('IT'), ('Finance');

INSERT INTO roles (title, salary, department_id) VALUES ('Recruiter', 75000, 1), ('Developer', 100000, 2), ('Accountant', 75000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Gus', 'Gonzalez', 2), ('Doc', 'Davis', 1, 1), ('Billy', 'Goat', 3, 1);