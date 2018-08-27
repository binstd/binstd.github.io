---
title: "token明细"
tocTitle: "查看token详情"
description: " 给定token合约地址看详细信息"
commit: 30939d5
---


###指定token信息查询
**1. 功能描述**

指定合约地址，查询该token的明细。

**2. 请求说明**
> 请求方式：POST<br>
请求URL ：[网关url+/ethapi/tokeninfo](#)

**3. 请求参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
contract_address     |string        |token的合约地址


header中需有api-key，**不知api-key如何添加到http请求的header中？**详情参考文档：[接口使用介绍](/started)。

**4. 返回结果**

```javascript
{
    "code": 0,
    "msg": "ok",
    "data": {
        "name": "",
        "symbol": "EOS",
        "decimals": "18"
    }
}
```

**5. 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
code       |int        |返回状态码
msg       |string        |状态码信息（正确：ok，错误：原因）
data name       |string        |token名称
data symbol       |string        |币简写
data decimals       |string        |token的位数

**6. 错误状态码**


参见 [接口使用介绍](/started)中错误码部分

