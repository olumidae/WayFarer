import pool from './db';

const insertData = `
INSERT INTO users (
  id, email, first_name, last_name, password, is_admin
) VALUES
('2e0785a9-3611-491f-951c-62f2fe4c320a', 'olumideomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$DAUlN//SebBEPkWppjD1AeIRy6dWJ3k8DMv.T4hBSeZh/Lycb0Yki', true, false),
('661b0c4b-1d4a-4e44-8b09-66e3554c045b', 'michaelsmith@gmail.com', 'Michael', 'Smith', '$2b$10$DAUlN//SebBEPkWppjD1AeIRy6dWJ3k8DMv.T4hBSeZh/Lycb0Yki', false, false),
('7f5393a0-a5ad-4194-ab8d-b837b0d9e1c5', 'janesmith@jsmith.com', 'Jane', 'Smith', '$2b$10$DAUlN//SebBEPkWppjD1AeIRy6dWJ3k8DMv.T4hBSeZh/Lycb0Yki', false, false),
('d56e5970-f169-453e-9646-939b15c3900a', 'jchinaman@mail.com', 'John', 'Chinaman', '$2b$10$DAUlN//SebBEPkWppjD1AeIRy6dWJ3k8DMv.T4hBSeZh/Lycb0Yki', false, false);
INSERT INTO bus (
  id, number_plate, manufacturer, model, year, capacity
) VALUES
('4362d3d7-9c27-4a3e-bcd0-b1ecf914e436', 'JB344KJA', 'TOYOTA', 'HIACE', '1999', 18),
('3332d3d7-9c27-4a3e-bcd0-b1ecf914e629', 'AA492IKJ', 'TOYOTA', 'LITACE', '2009', 12);
INSERT INTO trip (
  id, bus_id, origin, destination, trip_date, fare, status
) VALUES
('aaac8272-4b57-423c-906f-3da93e823f49', '8502d3d7-9c27-4a3e-bcd0-b1ecf914e628', 'Ikeja, Lagos', 'CMS, Lagos', '2019-04-02', 500.00, 'active'),
('bbbc8272-4b57-423c-906f-3da93e823f49', '1232d3d7-9c27-4a3e-bcd0-b1ecf914e123', 'Alausa, Lagos', 'Maryland, Lagos', '2019-06-26', 300.00, 'cancelled'),
('ccc58272-4b57-423c-906f-3da93e823f49', '2222d3d7-9c27-4a3e-bcd0-b1ecf914e222', 'Garki, Abuja', 'Hilton Drive, Abuja', '2019-05-30', 1000.00, 'active'),
('dddc8272-4b57-423c-906f-3da93e823f49', '1232d3d7-9c27-4a3e-bcd0-b1ecf914e123', 'Ikoyi, Lagos', 'Victoria Island, Lagos', '2019-01-20', 600.00, 'active');
INSERT INTO booking (
  id, trip_id, user_id, seat_number
) VALUES
('abcc8272-4b57-423c-906f-3da93e823f66', 'bbbc8272-4b57-423c-906f-3da93e823f49', 'd56e5970-f169-453e-9646-939b15c3900a', 6),
('22cc8272-4b57-423c-906f-3da93e823f66', 'bbbc8272-4b57-423c-906f-3da93e823f49', '8468bb44-68c7-4bee-8043-c944fe2d3ff3', 8),
('33cc8272-4b57-423c-906f-3da93e823f66', 'dddc8272-4b57-423c-906f-3da93e823f49', '54ef67cc-f170-41e8-9495-1d7b051e38fd', 13),
('44cc8272-4b57-423c-906f-3da93e823f66', 'dddc8272-4b57-423c-906f-3da93e823f49', '661b0c4b-1d4a-4e44-8b09-66e3554c045b', 7),
('55cc8272-4b57-423c-906f-3da93e823f66', 'dddc8272-4b57-423c-906f-3da93e823f49', '8468bb44-68c7-4bee-8043-c944fe2d3ff3', 28),
('66cc8272-4b57-423c-906f-3da93e823f66', 'ccc58272-4b57-423c-906f-3da93e823f49', '7f5393a0-a5ad-4194-ab8d-b837b0d9e1c5', 22),
('77cc8272-4b57-423c-906f-3da93e823f66', 'ccc58272-4b57-423c-906f-3da93e823f49', 'd56e5970-f169-453e-9646-939b15c3900a', 1);
`;

pool.query(insertData);
