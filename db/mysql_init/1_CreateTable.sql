CREATE DATABASE IF NOT EXISTS main_db;
USE main_db;

CREATE TABLE separations (
    id int(2) AUTO_INCREMENT,
    color varchar(20),
    `name` varchar(50),
    PRIMARY KEY(id)
);

CREATE TABLE monthly_days (
    area_id int(3),
    `month` int(2),
    separation_id int(2),
    collection_day int(2),
    PRIMARY KEY(area_id, `month`),
    FOREIGN KEY(separation_id)
    REFERENCES separations(id)
);

CREATE TABLE areas (
    id int(3) AUTO_INCREMENT,
    `name` varchar(20),
    burnable_day_01 int(3),
    burnable_day_02 int(3),
    plastic_day int(3),
    PRIMARY KEY(id),
    FOREIGN KEY(id)
    REFERENCES monthly_days(area_id)
);

CREATE TABLE kinds (
    id int(3) AUTO_INCREMENT,
    `name` varchar(20),
    separation_id int(2),
    point varchar(100),
    PRIMARY KEY(id),
    FOREIGN KEY(separation_id)
    REFERENCES separations(id)
);

CREATE TABLE synonyms (
    id int(4) AUTO_INCREMENT,
    kind_id int(3),
    `name` varchar(20),
    PRIMARY KEY(id),
    FOREIGN KEY(kind_id)
    REFERENCES separations(id)
);

CREATE VIEW search AS(
    SELECT `name`, kind_id FROM synonyms
    UNION
    SELECT `name`, id FROM kinds
)
ORDER BY 1;

INSERT INTO separations (color,`name`)
VALUES
    ('blue', 'ガラス、くずびん類、陶磁器類'),
    ('yellow', '布類、段ボール類'),
    ('green', '資源びん'),
    ('orange', 'プラスチック製容器包装'),
    ('purple', 'ペットボトル'),
    ('red', '燃えるごみ'),
    ('skyblue', '紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),
    ('light_blue', '缶・金属類'),
    ( NULL, '粗大ごみ'),
    ( NULL, '家電４品目'),
    ( NULL, '蛍光管'),
    ( NULL, 'ガレキ類'),
    ( NULL, '乾電池・蛍光管'),
    ( NULL, '布類'),
    ( NULL, 'ダンボール類'),
    ( NULL, 'てんぷら油、または燃えるごみ'),
    ( NULL, 'その他');

CREATE USER 'referer'@'localhost' IDENTIFIED BY 'referer_pass';

GRANT SELECT ON main_db.* TO referer@localhost;

FLUSH PRIVILEGES;