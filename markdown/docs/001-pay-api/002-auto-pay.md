---
title: 自动转账
---

# **1. 功能描述**
可一次发送多个转账信息,我们会在一个低gas的实现点,帮你自动转账.
你可以通过此接口,减少重复劳动以及,以及低价时间点.


# **2. 请求说明**

> 请求方式：POST <br>
请求URL ：[网关url+/api/chain/tokentx/:txhash](#)


# **3. 请求数据**

```javascript
[
    {
        "toAddress": "0xaff28867914792Bc52e0cAA153798b94E1Bf95A1",
        "contactName": "钱包1",
        "amount": "3",
        "fromAddress": "0xaff28867914792Bc52e0cAA153798b94E1Bf95A1",
        "dappId":"39"
    },
    {
        "toAddress": "0xaff28867914792Bc52e0cAA153798b94E1Bf95A1",
        "contactName": "钱包2",
        "amount": "3",
        "fromAddress": "0xaff28867914792Bc52e0cAA153798b94E1Bf95A1",
        "dappId":"39"
    }  
]
```

**具体含义:**
字段       |字段类型       |字段说明
------------|-----------|-----------
toAddress  |string        |目标公钥
contactName  |string        |备注名称
amount  |string           |额度
fromAddress  |string           |转账公钥

# **4.调用案例**
网关url+api/chain/tokentx/0x863868eacf2f87442880fa06c253038cb388fc08d1833477838e0520ef0ca3c4?chain=eth_ropsten

header中需有api-key: **不知api-key如何添加到http请求的header中？**详情参考文档：[接口使用介绍](/docs/zh/started)的章节:**接口返回状态编码释意&错误代码** 

**chain类型支持那些？** 详情参考文档：[接口使用介绍](/docs/zh/started)的章节: **参数chain支持的区块链&主网类型** 

# **5. 返回结果**
```javascript
{
    "code": 0,
    "msg": "ok"
}
```

# **6. 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
code       |int        |返回状态码
msg       |string        |状态码信息（正确：ok，错误：原因）


# **7. 错误状态码**

参见 [接口使用介绍](/started)中错误码部分

