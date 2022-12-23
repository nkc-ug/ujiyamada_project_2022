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
| month   | int     | 表示する月　　   |

### Res
#### 成功時
```
200 OK
```

| param   | type   | description         |
| ------- | ------ | ------------------- |
| day_id  | int    | カレンダー中の位置     |
| day     | int    | 日付                 |
| holiday | boolean | 祝日の有無           |
| item_id | int[]  | その日捨てる種類の配列  |

```javascript
[
    {
        
        "day_id": int,
        "day": int,
        "holiday": boolean,
        "item_id":[
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
| divide      | string  | 分類        　|
| description | string  | 注意点        |

```javascript
{
    "divide": string,
    "description": string
}
```

#### 失敗時
```
404 NotFound
```
