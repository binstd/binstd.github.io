---
title: "token余额"
commit: 30939d5
---

# **1. 功能描述**

获取指定账户（钱包地址），存在某token的额度。

# **2. 请求说明**

> 请求方式：GET<br>
请求URL ：[网关url+/api/chain/balance](#)

# **3. 请求参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
address      |string       |指定钱包地址
contract_address     |string        |token的合约地址（非必填项）,如果不填将返回公链币
chain  |string        |链名称(可选eth_main,eth_ropsten等等)

header中需有api-key: **不知api-key如何添加到http请求的header中？**详情参考文档：[接口使用介绍](/docs/zh/started)的章节:**接口返回状态编码释意&错误代码** 


**chain类型支持那些？** 详情参考文档：[接口使用介绍](/docs/zh/started)的章节: **参数chain支持的区块链&主网类型** 

# **4. 返回结果**

```javascript
{
    "code": '0',
    "msg": "ok",
    "data": {
        "balance": "726357436783800000000000"
    }
}
```

# **5. 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
code       |int        |返回状态码
msg       |string        |状态码信息（正确：ok，错误：原因）
data balance       |string        |token额度

# **6. 错误状态码**

参见 [接口使用介绍](/started)中错误码部分
