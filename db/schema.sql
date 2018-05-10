CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE products(
	item_id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (item_id)
);