---
title: "开始吧"
tocTitle: "接口使用介绍"
description: "在你的开发环境下, 设置 React Storybook "
commit: 30939d5
---
# 基础数据查询

###1. 指定账户余额
**1.1 功能描述**

获取指定账户（钱包地址），存在某token的额度。

**1.2 请求说明**
> 请求方式：POST<br>
请求URL ：[login](#)

**1.3 请求参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
address      |string       |指定钱包地址
contract_address     |string        |币的合约

**1.4 返回结果**
```javascript
{
  "data": {
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc2FsZS1hcGkuZGV2L2xvZ2luIiwiaWF0IjoxNDkxNTMyOTI4LCJleHAiOjE0OTIyNTI5MjgsIm5iZiI6MTQ5MTUzMjkyOCwianRpIjoiN1hCUXdwN1FHZmxUdHVVQiIsInV1aWQiOiI1MDZjYWY3MCJ9.FyyXagHtBfDBtMJZPV_hm2q6CVULpY63JPDGDHXc"
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

**1.5 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
token       |string        |token值

**1.6 错误状态码**
状态码       |说明
------------|-----------
3001       |其他认证错误信息！
3002       |用户不存在！
3003       |用户名或密码有误！

## 2. 刷新Token值
### 2.1 功能描述
通过请求刷新Token接口，获取新的Token值。

### 2.2 请求说明
> 请求方式：PATCH<br>
请求URL ：[refresh-tokens](#)

### 2.3 请求参数
无参数

### 2.4 返回结果

```javascript
{
  "data": {
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdm95YWdlLmRldi9hdXRob3JpemF0aW9ucy9yZWZyZXNoLXRva2VucyIsImlhdCI6MTQ4OTk4Nzg0OCwiZXhwIjoxNDg5OTg3OTc3LCJuYmYiOjE0ODk5ODc5MTcsImp0aSI6IlRvNmxzamhwTTNpcmhRQlAiLCJ1dWlkIjoiNWZlYzI0NzAifQ.hgZsQq5rT5VXAwUilEv5P1JIhLrctJPKAkKWBSqwu3c"
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

### 2.5 返回参数
字段       |字段类型       |字段说明
------------|-----------|-----------
token       |string        |token值

### 2.6 错误状态码
参见 [全局响应状态码说明](#124-全局响应状态码说明)





