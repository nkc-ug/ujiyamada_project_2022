INSERT INTO kinds (name,separations_id,point) VALUES
(CD・DVD・MD等,(SELECT separations_id FROM separations WHERE name = ﻿燃えるごみ),'ケースも燃えるごみです。DVD、MD、BD（ブルーレイディスク）も燃えるごみです。'),
(ＨＤＤ,(SELECT separations_id FROM separations WHERE name = 缶・金属類),'ごみで出す場合は缶・金属類ですが、個人情報等の重要なデータは完全に消去してから出すことをおすすめします。'),
(ＳＤカード,(SELECT separations_id FROM separations WHERE name = 缶・金属類),'ごみで出す場合は缶・金属類ですが、個人情報等の重要なデータは完全に消去してから出すことをおすすめします。'),
(ＳＳＤ,(SELECT separations_id FROM separations WHERE name = 缶・金属類),'ごみで出す場合は缶・金属類ですが、個人情報等の重要なデータは完全に消去してから出すことをおすすめします。'),
(Tシャツ,(SELECT separations_id FROM separations WHERE name = 布類),'');

INSERT INTO synonyms (kind_id,name) VALUES
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'しーでぃー'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'MD'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'DVD'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'BD'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'ブルーレイディスク'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'cd'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'bd'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'dvd'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'Cd'),
((SELECT id FROM kinds WHERE name = CD・DVD・MD等),'Bd,Dvd'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'えいちでぃーでぃー'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'ハードディスク'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'ＨＤＤレコーダー'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'外付けＨＤＤ'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'Hdd'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'hdd'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'HDDレコーダー'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'Hddレコーダー'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'hddレコーダー'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'外付けHDD'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'外付けHdd'),
((SELECT id FROM kinds WHERE name = ＨＤＤ),'外付けhdd'),
((SELECT id FROM kinds WHERE name = ＳＤカード),'えすでぃーかーど'),
((SELECT id FROM kinds WHERE name = ＳＤカード),'SD'),
((SELECT id FROM kinds WHERE name = ＳＤカード),'SDカード'),
((SELECT id FROM kinds WHERE name = ＳＤカード),'Sd'),
((SELECT id FROM kinds WHERE name = ＳＤカード),'Sdカード'),
((SELECT id FROM kinds WHERE name = ＳＤカード),'sd'),
((SELECT id FROM kinds WHERE name = ＳＤカード),'sdカード'),
((SELECT id FROM kinds WHERE name = ＳＳＤ),'えすでぃーでぃー'),
((SELECT id FROM kinds WHERE name = ＳＳＤ),'ソリッドステートドライブ'),
((SELECT id FROM kinds WHERE name = ＳＳＤ),'Ssd'),
((SELECT id FROM kinds WHERE name = ＳＳＤ),'ssd'),
((SELECT id FROM kinds WHERE name = Tシャツ),'てぃーしゃつ'),
((SELECT id FROM kinds WHERE name = Tシャツ),'ティーシャツ');