---
title: "交易记录"
commit: dd04879
---

# **1. 功能描述**

可以查公链币本身的交易记录,也可以传递合约地址查询合约的记录(当前支持erc20合约,后续会支持更多合约标准)

# **2. 请求说明**

> 请求方式：GET <br>
请求URL ：[网关url+/api/chain/tokentx](#)

# **3. 请求参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
chain  |string        |链名称(可选eth_main,eth_ropsten等等)
address  |string        |公钥地址
address  |string        |钱包地址
contract_address  |string        |合约地址(非必填)

header中需有api-key: **不知api-key如何添加到http请求的header中？**详情参考文档：[接口使用介绍](/docs/zh/started)的章节:**接口返回状态编码释意&错误代码** 

**chain类型支持那些？** 详情参考文档：[接口使用介绍](/docs/zh/started)的章节: **参数chain支持的区块链&主网类型** 

# **4. 返回结果**

```javascript
{
    "code": "0",
    "msg": "ok",
    "data": [
        {
            "from": "0x297ac1d5b2ae89feff093956912d8da71be85002",
            "to": "0x81d723361d4f3e648f2c9c479d88dc6debf4fa5f",
            "tokenSymbol": "KNC",
            "value": "8257000000000000000",
            "hash": "0x3c12e13adae8bfb1bbdb6819dbcc5eb093b3e8083cd24dbfdebbbcdba1d79968",
            "tx_cost": "605129716376576"
        }
    ]
}
```

# **5. 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
code       |int        |返回状态码
msg       |string        |状态码信息（正确：ok，错误：原因）
data        |array        |交易记录数组
data:from        |string        |交易发起者公钥
data:to        |string        |交易目标公钥
data:tokenSymbol       |string        |token缩写
data:vulue       |string        |额度
data:hash |string        |交易hash
data:tx_cost |string        |手续费

# **6. 错误状态码**

参见 [接口使用介绍](/started)中错误码部分





