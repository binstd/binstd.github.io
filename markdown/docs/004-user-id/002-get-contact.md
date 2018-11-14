---
title: 获取联系人列表
---

# **1. 功能描述**
获取指定公钥地址的备注列表

# **2. 请求说明**

> 请求方式：GET <br>
请求URL ：[网关url+/api/chain/tokentx/:address](#)


header中需有api-key: **不知api-key如何添加到http请求的header中？**详情参考文档：[接口使用介绍](/docs/zh/started)的章节:**接口返回状态编码释意&错误代码** 

# **3. 返回结果**

```javascript
{
    "id": 47,
    "contactName": "lewewewewll",
    "contactAddress": "34343545eeeee65",
    "address": "0x81d723361d4f3e648f2c9c479d88dc6debf4fa5f",
    "updatedAt": "2018-11-12T09:22:45.447Z",
    "createdAt": "2018-11-12T09:22:45.447Z",
    "user_id": null
}
```

# 4. 返回参数

字段       |字段类型       |字段说明
------------|-----------|-----------
contactName       |string      |联系备注名称
contactAddress     |string        |联系公钥


 **5. 错误状态码**

参见 [接口使用介绍](/started)中错误码部分




