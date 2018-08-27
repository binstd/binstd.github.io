---
title: "当前gas价格"
tocTitle: "当前gas价格"
description: "查询当前网络下的gas费用 "
commit: 30939d5
---

###当前gas价格

**1. 功能描述**

查看当前网络下的gas价格（单位是：wei）

**2. 请求说明**

> 请求方式：GET <br>
请求URL ：[网关url+/ethapi/gasprice](#)

**3. 请求参数**

header中需有api-key，**不知api-key如何添加到http请求的header中？** 详情参考文档：[接口使用介绍](/started)。

**4. 返回结果**

```javascript
{
    "code": 0,
    "msg": "ok",
    "data": {
        "wei": "2000000000"
    }
}
```

**5. 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
code       |int        |返回状态码
msg       |string        |状态码信息（正确：ok，错误：原因）
data wei       |string        |手续费额度（单位：wei）


**6. 错误状态码**

参见 [接口使用介绍](/started)中错误码部分





