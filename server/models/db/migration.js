import pool from './db';

const createTables = `DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(128) UNIQUE NOT NULL,
    first_name VARCHAR(128),
    last_name VARCHAR(128),
    password VARCHAR NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false,
    is_loggedin BOOLEAN NOT NULL DEFAULT false
  );
  DROP TABLE IF EXISTS bus CASCADE;
  CREATE TABLE bus(
    id SERIAL PRIMARY KEY NOT NULL,
    number_plate VARCHAR(15) UNIQUE NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year VARCHAR(6) NOT NULL,
    capacity SMALLINT NOT NULL
  );
  DROP TABLE IF EXISTS trip CASCADE;
  CREATE TABLE trip(
    id SERIAL PRIMARY KEY NOT NULL,
    bus_id SERIAL NOT NULL REFERENCES bus (id),
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    trip_date DATE NOT NULL,
    fare NUMERIC(10, 2) NOT NULL,
    status VARCHAR(10) NOT NULL DEFAULT 'active'
  );
  DROP TABLE IF EXISTS booking CASCADE;
  CREATE TABLE booking(
    id SERIAL PRIMARY KEY NOT NULL,
    trip_id SERIAL NOT NULL  REFERENCES trip (id),
    user_id SERIAL NOT NULL  REFERENCES users (id),
    seat_number SMALLINT NOT NULL,
    created_on DATE NOT NULL DEFAULT CURRENT_DATE
  );`;


pool.query(createTables);
