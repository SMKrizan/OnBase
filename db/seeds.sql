INSERT INTO departments (dept_name)
VALUES
    ('Admin'),
    ('Accounting'),
    ('R&D'),
    ('IT'),
    ('Legal'),
    ('Client Services');

INSERT INTO roles (title, salary, dept_id)
VALUES
    ('CEO', 200000, 1),
    ('CFO', 180000, 2),
    ('CAO', 180000, 1),
    ('Director, r&d', 100000, 3),
    ('Director, leg', 100000, 5),
    ('Director, cs', 100000, 6),
    ('Program Manager', 80000, 3),
    ('Accountant', 75000, 2),
    ('Project Manager', 60000, 3),
    ('Paralegal', 60000, 5),
    ('Coordinator', 40000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    -- c-suite
    ('Eve', 'Basquiat', 1, NULL),
    ('Roland', 'Plath', 2, 1),
    ('Brittany', 'Kangol', 3, 1),
    -- r&d
    ('Alice', 'Peters', 4, 3),
    -- legal
    ('Allan', 'Price', 5, 3),
    -- client services
    ('Dwight', 'Stevens', 6, 3),
    -- accounting
    ('Shauna', 'Peridot', 8, 2),
    ('Toby', 'Leery', 8, 2),
    ('Jonah', 'Standingbear', 7, 4),
    ('Tanya', 'Quinn', 7, 4),
    ('Alex', 'Rabideaux', 10, 5),
    ('Reginold', 'Planck', 11, 6),
    ('Alex', 'Jones', 7, 6),
    ('Alessandra', 'Munoz', 9, 4),
    ('Sasha', 'Stahl', 11, 4);
