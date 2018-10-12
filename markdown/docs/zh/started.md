---
title: "接口使用介绍"
tocTitle: "接口使用介绍"
description: ""
commit: 30939d5
---
###简介
**binstd云平台，帮你连接到去中心化的公链上（ETH，EOS,NEO等）。基于JTW token作为接口使用的认证凭证。**

提供支付接口，自动处理，数据上链等多个接口。

###操作步骤

**1. 登录&API-KEY的软件环境**

需在装有metamask的chrome,firefox，trust钱包等提供web3.js容器的浏览器环境中，打开我们的官网：https://www.binstd.com/ .并登录：
![](https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/Jietu20180827-103226-HD.gif)


**2. 获取自己的API-KEY**

点击个人中心，然后在我的API-KEY中可见：
![](https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/023939.jpg)


**3. 使用binstd-API**

在您的http请求的header中加入api-key的信息：

key      |value       |备注
------------|-----------|-----------
Authorization      |Bearer +API_KEY     |Bearer 和API_KEY之间要有空格


如图：![](https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/025024.png)


###接口返回状态编码释意&错误代码
返回状态码      |状态消息     |备注
------------|-----------|-----------
0      |ok     |正常状态
1002      |钱包地址不正确     |
1003      |合约地址不正确    |
1004      |区块链网络连接异常    |
 1005    | 没有账户权限，请重新授权 |

###参数chain支持的区块链&主网类型
chain字符串    |网络     |所属区块链 | 可用状态
------------|-----------|-----------|-----------
eth_main      |以太坊公链主网     |以太坊 |可用
eth_ropsten      |测试网络     |以太坊 |可用
eos_main      |eos主网   | eos   |等待上线
eos_force      |eos原力    | eos    |等等上线

###去中心化的api接口网关&节点计划
目前只有一个api网关地址：
https://api.binstd.com

后期节点增多，将可使用任意节点作为api网关，**且任意连接节点API_KEY都可使用。**

**成为去中心化binstd云服务层的节点：**

成为我们的节点，若节点有收益（后期使用我们的云服务需消耗一定token），您将获得分红。
