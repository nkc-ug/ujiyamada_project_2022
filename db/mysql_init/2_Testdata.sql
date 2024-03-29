USE main_db;

INSERT INTO kinds (`name`,separation_id,`point`) VALUES
('CD・DVD・MD等',(SELECT id FROM separations WHERE `name` = '﻿燃えるごみ'),'ケースも燃えるごみです。DVD、MD、BD（ブルーレイディスク）も燃えるごみです。'),
('ＨＤＤ',(SELECT id FROM separations WHERE `name` = '缶・金属類'),'ごみで出す場合は缶・金属類ですが、個人情報等の重要なデータは完全に消去してから出すことをおすすめします。'),
('ＳＤカード',(SELECT id FROM separations WHERE `name` = '缶・金属類'),'ごみで出す場合は缶・金属類ですが、個人情報等の重要なデータは完全に消去してから出すことをおすすめします。'),
('ＳＳＤ',(SELECT id FROM separations WHERE `name` = '缶・金属類'),'ごみで出す場合は缶・金属類ですが、個人情報等の重要なデータは完全に消去してから出すことをおすすめします。'),
('Tシャツ',(SELECT id FROM separations WHERE `name` = '布類'),'');

INSERT INTO synonyms (kind_id,`name`) VALUES
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'しーでぃー'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'MD'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'DVD'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'BD'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'ブルーレイディスク'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'cd'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'bd'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'dvd'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'Cd'),
((SELECT id FROM kinds WHERE `name` = 'CD・DVD・MD等'),'Bd,Dvd'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'えいちでぃーでぃー'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'ハードディスク'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'ＨＤＤレコーダー'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'外付けＨＤＤ'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'Hdd'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'hdd'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'HDDレコーダー'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'Hddレコーダー'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'hddレコーダー'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'外付けHDD'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'外付けHdd'),
((SELECT id FROM kinds WHERE `name` = 'ＨＤＤ'),'外付けhdd'),
((SELECT id FROM kinds WHERE `name` = 'ＳＤカード'),'えすでぃーかーど'),
((SELECT id FROM kinds WHERE `name` = 'ＳＤカード'),'SD'),
((SELECT id FROM kinds WHERE `name` = 'ＳＤカード'),'SDカード'),
((SELECT id FROM kinds WHERE `name` = 'ＳＤカード'),'Sd'),
((SELECT id FROM kinds WHERE `name` = 'ＳＤカード'),'Sdカード'),
((SELECT id FROM kinds WHERE `name` = 'ＳＤカード'),'sd'),
((SELECT id FROM kinds WHERE `name` = 'ＳＤカード'),'sdカード'),
((SELECT id FROM kinds WHERE `name` = 'ＳＳＤ'),'えすでぃーでぃー'),
((SELECT id FROM kinds WHERE `name` = 'ＳＳＤ'),'ソリッドステートドライブ'),
((SELECT id FROM kinds WHERE `name` = 'ＳＳＤ'),'Ssd'),
((SELECT id FROM kinds WHERE `name` = 'ＳＳＤ'),'ssd'),
((SELECT id FROM kinds WHERE `name` = 'Tシャツ'),'てぃーしゃつ'),
((SELECT id FROM kinds WHERE `name` = 'Tシャツ'),'ティーシャツ');

INSERT INTO monthly_days (area_id,`month`,separation_id,collection_day)
VALUES
    (0,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),5),
    (0,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),19),
    (0,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),19),
    (0,4,(SELECT id FROM separations WHERE `name` ='ガラス、くずびん類、陶磁器類'),26),
    (1,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),11),
    (1,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),11),
    (2,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),6),
    (2,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),6),
    (3,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),4),
    (4,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),13),
    (4,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),13),
    (5,4,(SELECT id FROM separations WHERE `name` ='ガラス、くずびん類、陶磁器類'),5),
    (6,4,(SELECT id FROM separations WHERE `name` ='ガラス、くずびん類、陶磁器類'),7),
    (7,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),6),
    (8,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),12),
    (9,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),6),
    (10,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),7),
    (11,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),7),
    (11,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),7),
    (12,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),14),
    (12,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),14),
    (13,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),4),
    (13,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),4),
    (14,4,(SELECT id FROM separations WHERE `name` ='ガラス、くずびん類、陶磁器類'),4),
    (15,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),5),
    (15,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),5),
    (16,4,(SELECT id FROM separations WHERE `name` ='布類、段ボール類'),11),
    (16,4,(SELECT id FROM separations WHERE `name` ='紙類(新聞・折込チラシ、飲料用紙パック、雑誌・雑がみ類)'),11),
    (17,4,(SELECT id FROM separations WHERE `name` ='ガラス、くずびん類、陶磁器類'),4),
    (18,4,(SELECT id FROM separations WHERE `name` ='資源びん'),11),
    (19,4,(SELECT id FROM separations WHERE `name` ='ペットボトル'),4),
    (20,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),5),
    (21,4,(SELECT id FROM separations WHERE `name` ='缶・金属類'),5);

INSERT INTO areas (`name`,burnable_day_01,burnable_day_02,plastic_day)
VALUES
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