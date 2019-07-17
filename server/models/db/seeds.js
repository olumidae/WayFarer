import pool from './db';

const insertData = `
INSERT INTO users (
  id, email, first_name, last_name, password, is_admin
) VALUES
('1', 'olumideomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true'),
('2', 'michaelsmith@gmail.com', 'Michael', 'Smith', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false'),
('3', 'janesmith@jsmith.com', 'Jane', 'Smith', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false'),
('4', 'jchinaman@mail.com', 'John', 'Chinaman', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false');
INSERT INTO bus (
  id, number_plate, manufacturer, model, year, capacity
) VALUES
('1', 'JB344KJA', 'TOYOTA', 'HIACE', '1999', 18),
('2', 'AA492IKJ', 'TOYOTA', 'LITACE', '2009', 12);
INSERT INTO trip (
  id, bus_id, origin, destination, trip_date, fare, status
) VALUES
('1', '1', 'Lagos', 'Ibadan', '2019-04-02', 2000.00, 'active'),
('2', '1', 'Lagos',  'Abuja', '2019-06-26', 5000.00, 'cancelled'),
('3', '2', 'Abuja', 'Ibadan', '2019-05-30', 9000.00, 'active'),
('4', '2', 'Lagos', 'Port Harcourt', '2019-01-20', 8000.00, 'active');
INSERT INTO booking (
  id, trip_id, user_id, seat_number
) VALUES
('1', '1', '2', 6),
('2', '4', '2', 8),
('3', '1', '3', 13),
('4', '2', '1', 7),
('5', '2', '2', 18),
('6', '3', '4', 12),
('7', '3', '3', 1);
`;

pool.query(insertData);
