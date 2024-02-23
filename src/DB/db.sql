CREATE DATABASE if NOT EXISTS userlogin

Use userlogin;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameuser VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO userlogin.users(nameuser,password) VALUES('admin','1234');
INSERT INTO userlogin.users(nameuser,password) VALUES('david','1234');

SELECT * FROM userlogin.users