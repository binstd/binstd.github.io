---
title: "token余额"
tocTitle: "指定地址的token余额"
description: "给定合约地址和钱包公钥返回额度"
commit: 30939d5
---

### 指定账户余额
**1. 功能描述**

获取指定账户（钱包地址），存在某token的额度。

**2. 请求说明**
> 请求方式：POST<br>
请求URL ：[网关url+/ethapi/balance](#)

**3. 请求参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
address      |string       |指定钱包地址
contract_address     |string        |token的合约地址（非必填项）


header中需有api-key，**不知api-key如何添加到http请求的header中？**详情参考文档：[接口使用介绍](/started)。

**4. 返回结果**

```javascript
{
    "code": 0,
    "msg": "ok",
    "data": {
        "balance": "726357436783800000000000"
    }
}
```

**5. 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
code       |int        |返回状态码
msg       |string        |状态码信息（正确：ok，错误：原因）
data balance       |string        |token额度

**6. 错误状态码**

参见 [接口使用介绍](/started)中错误码部分
