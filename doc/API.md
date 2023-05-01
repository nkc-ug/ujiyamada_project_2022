## API Docment

# 地区 ID・地区名取得　 API

### Req

```
GET /api/area
```

### Res

#### 成功時

```
200 OK
```

| param     | type | description |
| --------- | ---- | ----------- |
| area_id   | int  | 地域 ID     |
| area_name | int  | 地域名      |

```javascript
[
  {
    area_id: int,
    area_name: string
  }
];
```

#### 失敗時

```
404 NotFound
```

<br>

# カレンダー情報取得 API

### Req

```
GET /api/calender/{area_id}/{year}/{month}
```

| param   | type | description     |
| ------- | ---- | --------------- |
| area_id | int  | 表示する地域 ID |
| year    | int  | 表示すること年  |
| month   | int  | 表示する月　　  |

### Res

#### 成功時

```
200 OK
```

| param          | type    | description                         |
| -------------- | ------- | ----------------------------------- |
| day_location   | int     | カレンダー中の位置                  |
| date           | int     | 日にち(NULL はカレンダーの余白部分) |
| isholiday      | boolean | 祝日かどうか                        |
| discardable_id | int[]   | 捨てられるゴミの種類の配列          |

[※item_id と item_name の対応表](./item.md)

この形式のデータが 35 個固定で送信される

```javascript
[
  {
    day_location: int,
    date: int,
    isholiday: boolean,
    discardable_id: [int]
  }
];
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

| param     | type   | description    |
| --------- | ------ | -------------- |
| item_name | string | 検索する文字列 |

### Res

#### 成功時

```
200 OK
```

| param     | type     | description    |
| --------- | -------- | -------------- |
| item_list | string[] | 選択候補の配列 |

<!-- prettier-ignore -->
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

| param     | type   | description          |
| --------- | ------ | -------------------- |
| item_name | string | 詳細を取得する物品名 |

### Res

#### 成功時

```
200 OK
```

| param       | type   | description |
| ----------- | ------ | ----------- |
| type        | string | 分類 　     |
| description | string | 注意点      |

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
