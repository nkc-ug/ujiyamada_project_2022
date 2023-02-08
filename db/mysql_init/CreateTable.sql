CREATE TABLE separations (
    id int(2) AUTO_INCREMENT,
    name varchar(20),
    color varchar(20),
    PRIMARY KEY(id)
);

CREATE TABLE kinds (
    id int(3) AUTO_INCREMENT,
    name varchar(20),
    separation_id int(2),
    point varchar(100),
    PRIMARY KEY(id),
    FOREIGN KEY(separation_id)
    REFERENCES separations(id)
);

CREATE TABLE monthly_days (
    area_id int(3) AUTO_INCREMENT,
    month int(2) AUTO_INCREMENT,
    separation_id int(2),
    collection_day int(2),
    PRIMARY KEY(area_id, month),
    FOREIGN KEY(separation_id)
    REFERENCES separations(id)
);

CREATE TABLE areas (
    id int(3) AUTO_INCREMENT,
    name varchar(20),
    burnable_day_01 int(3),
    burnable_day_02 int(3),
    plastic_day int(3),
    PRIMARY KEY(id),
    FOREIGN KEY(id)
    REFERENCES separations(area_id)
);

CREATE TABLE synonyms (
    id int(4),
    kind_id int(3) AUTO_INCREMENT,
    name varchar(20),
    PRIMARY KEY(id),
    FOREIGN KEY(kind_id)
    REFERENCES separations(id)
);