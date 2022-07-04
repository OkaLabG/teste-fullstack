CREATE DATABASE imobpower_test;

\c imobpower_test;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  birth_date DATE NOT NULL,
  password_hash VARCHAR NOT NULL,
  password_salt VARCHAR NOT NUll
);