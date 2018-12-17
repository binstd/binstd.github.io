---
title: abi翻译规范
---
# **1. 什么是abi翻译**

智能合约会生成abi文件供应用开发者调用，然而我们的合约操作界面也是基于abi实现的。abi中包含函数名称，传入参数和返回参数。
默认上驼峰英文，例如:
```js
[
   {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
```
如上的abi文件，他的翻译文件应该是如下格式：

```js
{
    "transfer": {
        "value": "转账",
        "inputs": {
            "to": "目标地址",
            "tokens": "token数量"
        },
        "outputs": {
            "success": "是否成功"
        }
    }  
}
```
翻译文件是一个json对象，第一级如上的例子，transfer就对应上面abi数组的一项，name的值。而inputs和
outputs的key也取自abi中相应的name。翻译文件中，key对应function,outputs,inputs的name,而value则都是对应的翻译名。



