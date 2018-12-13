---
title: API-key的获得和API调用
---


# **1.获得API-key的环境**

需在装有metamask的chrome,firefox，trust钱包等提供web3.js容器的浏览器环境中，打开我们的官网：https://www.binstd.com/ .并登录：
![](https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/Jietu20180827-103226-HD.gif)


# **2.获取自己的API-KEY**

点击个人中心，然后在我的API-KEY中可见：
![](https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/023939.jpg)


# **3. 使用binstd-API**

在您的http请求的header中加入api-key的信息：

key      |value       |备注
------------|-----------|-----------
Authorization      |Bearer +API_KEY     |Bearer 和API_KEY之间要有空格


具体调用可参考下图：
![](https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/025024.png)

