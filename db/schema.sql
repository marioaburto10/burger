CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
time_Stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM burgers;