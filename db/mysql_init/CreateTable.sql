CREATE TABLE separations (
    id int(2) AUTO_INCREMENT,
    color varchar(20),
    name varchar(50),
    PRIMARY KEY(id)
);

CREATE TABLE monthly_days (
    area_id int(3) AUTO_INCREMENT,
    month int(2),
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
    REFERENCES monthly_days(area_id)
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

CREATE TABLE synonyms (
    id int(4),
    kind_id int(3) AUTO_INCREMENT,
    name varchar(20),
    PRIMARY KEY(id),
    FOREIGN KEY(kind_id)
    REFERENCES separations(id)
);

INSERT INTO separations (color,name)
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

INSERT INTO monthly_days (area_id,month,separation_id,collection_day)
VALUES
    (0,1,(SELECT separations_id FROM separations WHERE name =缶・金属類),3),
    (0,1,(SELECT separations_id FROM separations WHERE name =缶・金属類),3);

INSERT INTO areas (name,burnable_day_01,burnable_day_02,plastic_day)
VALUESpukl
    ('進修',1,4,5),
    ('有緝',3,5,4),
    ('厚生',1,4,2),
    ('浜郷',2,4,5),
    ('豊浜',1,4,2),
    ('城田',1,4,5),
    ('四郷',2,5,3),
    ('沼木',2,5,2),
    ('修道',1,4,5),
    ('明倫',1,4,2),
    ('早修',2,5,3),
    ('中島',2,5,3),
    ('神社',2,5,3),
    ('大湊',2,5,4),
    ('宮本',2,5,4),
    ('北浜',1,4,5),
    ('二見1',1,4,5),
    ('二見2',2,5,4),
    ('小俣1',1,4,5),
    ('小俣2',2,5,4),
    ('御薗1',1,4,5),
    ('御薗2',2,5,5);