## API Docment

# カレンダー情報取得 API

[※item_idとitem_nameの対応表](./item.md)


### Req
```
GET /api/calender/{area_name}/{month}
```

| param   | type    | description    |
| ------- | ------- | -------------- |
| area_name | string  | 表示する地名     |
| month   | int or null     | 表示する月　　   |

### Res
#### 成功時
```
200 OK
```

| param   | type   | description         |
| ------- | ------ | ------------------- |
| day_location      | int       | カレンダー中の位置                 |
| date              | int       | 日にち(NULLはカレンダーの余白部分)  |
| isholiday         | boolean   | 祝日かどうか                      |
| discardable_id    | int[]     | 捨てられるゴミの種類の配列          |

この形式のデータが35個固定で送信される
```javascript
[
    {
        
        "day_location": int,
        "date": int,
        "isholiday": boolean,
        "discardable_id":[
            int
        ]
    }
]
```

#### 失敗時
```
404 NotFound
```
<br>

# 分別候補取得 API

### Req
```
GET /api/divide/{item_name}
```

| param     | type    | description  |
| --------- | ------- | ------------ |
| item_name | string  | 検索する文字列 |

### Res
#### 成功時
```
200 OK
```

| param    | type      | description  |
| -------- | --------- | ------------ |
| item_list | string[]  | 選択候補の配列 |

```javascript
[
    string   
]
```

#### 失敗時
```
404 NotFound
```
<br>

# 分別詳細取得 API

### Req
```
GET /api/divide/item/{item_name}
```

| param     | type    | description       |
| --------- | ------- | ----------------- |
| item_name | string  | 詳細を取得する物品名 |

### Res
#### 成功時
```
200 OK
```

| param       | type    | description  |
| ----------- | ------- | ------------ |
| type      | string  | 分類        　|
| description | string  | 注意点        |

```javascript
{
    "type": string,
    "description": string
}
```

#### 失敗時
```
404 NotFound
```
