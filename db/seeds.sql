INSERT INTO department (dept_name)
VALUES
    ('Admin'),
    ('Accounting'),
    ('Marketing'),
    ('IT'),
    ('Customer Service');

INSERT INTO roles (title, salary, dept_id)
VALUES
    ('CEO', 200000, 1),
    ('CFO', 180000, 2),
    ('CAO', 180000, 1),
    ('Director', 100000, 1),
    ('IT Manager', 80000, 3),
    ('Mkt Coordinator', 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Eve', 'Basquiat', 1, NULL),
    ('Roland', 'Plath', 2, NULL),
    ('Brittany', 'Kangol', 3, NULL),
    ('Alice', 'Peters', 4, 3),
    ('Allan', 'Price', 5, 3),
    ('Dwight', 'Stevens', 6, 4),
    ('Tanya', 'Quinn', 5, 5),
    ('Toby', 'Leery', 6, 4);