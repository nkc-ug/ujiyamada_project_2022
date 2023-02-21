CREATE TABLE separations (
    id int(2) AUTO_INCREMENT,
    color varchar(20),
    name varchar(20),
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

INSERT INTO separations
VALUES
    (1,'blue', 'ガラス、くずびん類、陶磁器類'),
    (2,'yellow', '布類、段ボール類'),
    (3,'green', '資源びん'),
    (4,'orange', 'プラスチック製容器包装'),
    (5,'purple', 'ペットボトル'),
    (6,'red', '燃えるごみ'),
    (7,'skyblue', '紙類(新聞・折込チラシ、飲料用git pull origin ブランチ名紙パック、雑誌・雑がみ類)'),
    (8,'light_blue', '缶・金属類'),
    (9, NULL, '粗大ごみ'),
    (10, NULL, '家電４品目'),
    (11, NULL, '蛍光管'),
    (12, NULL, 'ガレキ類'),
    (13, NULL, '乾電池・蛍光管'),
    (14, NULL, '布類'),
    (15, NULL, 'ダンボール類'),
    (16, NULL, 'てんぷら油、または燃えるごみ'),
    (17, NULL, 'その他');