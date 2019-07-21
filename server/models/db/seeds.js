import pool from './db';

const insertData = `
INSERT INTO users (
  id, email, first_name, last_name, password, is_admin
) VALUES
('1', 'oomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true'),
('2', 'msmith@gmail.com', 'Michael', 'Smith', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false'),
('3', 'janesmith@jsmith.com', 'Jane', 'Smith', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false'),
('4', 'jchinaman@mail.com', 'John', 'Chinaman', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false');
INSERT INTO bus (
  id, number_plate, manufacturer, model, year, capacity
) VALUES
('2', 'JB344KJA', 'TOYOTA', 'HIACE', '1999', 18),
('3', 'AA492IKJ', 'TOYOTA', 'LITACE', '2009', 12);
`;

pool.query(insertData);
