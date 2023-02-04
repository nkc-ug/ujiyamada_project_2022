CREATE TABLE separations (
    id int(2) AUTO_INCREMENT,
    name varchar(20),
    PRIMARY KEY(id)
);

CREATE TABLE kinds (
    id int(3) AUTO_INCREMENT,
    name varchar(20),
    separation_id int(2),
    point varchar(50),
    PRIMARY KEY(id),
    FOREIGN KEY separation_id,
    REFERENCES separations
);