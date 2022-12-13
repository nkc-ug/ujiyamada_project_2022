## 技術
- React
- MUI
- TypeSccript
- axios
- react-router-dom

## 画面構成（SPA）
- topPage - leftDrawer - searchModal

### topPage
- ハンバーガリスト → leftDrawerMenu
- 地区選択ドロップダウン
- 月選択ボタン
- カレンダー
    - カレンダー表示
    - 各ゴミの日の表示
- ゴミの分類の一覧
- （ニュースの表示）

### leftDrawer
- list
    - 分類検索 → searchModal
    - ゴミ分別ガイドブック（https://www.city.ise.mie.jp/kurashi/gomi/dashikata/1001439.html）
    - 伊勢市のゴミの現状（http://www.mie-c.ed.jp/cujiya/New5374/enlightenment/gennryou.html）
    - よくある質問（http://www.mie-c.ed.jp/cujiya/New5374/Q_Aproject/www/index.html）
    - LINEで分別（https://www.city.ise.mie.jp/kurashi/gomi/notice/1010177.html）

### searchModal
- 検索窓
- ゴミ分別をカード表示
    - 物品名
    - （画像）
    - 分別区分
    - 注意事項
    - 閉じるボタン