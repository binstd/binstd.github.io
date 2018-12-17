---
title: 获取合约abi接口
---

## **1. 功能描述**

指定apiname可获得它的abi,合约描述,部署的字节码

## **2. 请求说明**
> 请求方式：POST<br>
请求URL ：[网关url+/api/chain/abi(#)

## **3. 请求参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
apiname     |string        |对应指定的合约



**系统支持哪些合约abi？**
合约       |apiname       |说明
------------|-----------|-----------
标准ERC721    | ERC721Basic   |
标准ERC20     | ERC20Basic   |


## **4. 返回结果**

```javascript
{
    "code": 0,
    "msg": "ok",
    "data": {
        "title": "EOS",
        "contractName": "18",
        "description": "18"
        "imgUrl": "18"
        "abi": [...],
        "translate": {...},
        "bytecode": {...}
        
    }
}
```

## **5. 返回参数**

字段       |字段类型       |字段说明
------------|-----------|-----------
code       |int        |返回状态码
msg       |string        |状态码信息（正确：ok，错误：原因）
data title       |string        |标题
data contractName       |string        |合约名称
data description       |string        |合约描述
data imgUrl       |string        |合约图片
data abi       |string        |abi
data bytecode       |string        |部署字节码
data translate       |string        |翻译


## **8. 关于ABI**
参考官方文档：
https://solidity-cn.readthedocs.io/zh/develop/abi-spec.html?highlight=abi#abi-json

## **7. 错误状态码**

参见 [接口使用介绍](/started)中错误码部分



