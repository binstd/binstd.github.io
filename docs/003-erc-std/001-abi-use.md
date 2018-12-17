---
title: 智能合约abi介绍和使用
---

# **1. 什么是abi**
本质上是对合约的建立了一个json格式的字典,通过该字典知晓每个合约方法的名称，方便各种语言的开发者去调用。

API的格式是json文件，其中包含什么呢，如下：
```bash
[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
其中每一项代表智能合约的一个方法，又或者一个属性。
constant：如果值为false代表该合约是操作类的合约，如果值为true。
Inputs：为一个数组,代表当前方法入参列表，每一项代表这个方法的一个参数。
Outputs：代表该方法的返回列表，智能合约中可以返回多个值，所以也是一个数组。
Name：是这个合约方法的或属性，名称，如转账就是transfer。
可用的abi项：type为function代表这个项可能是一个方法，又或者一个选项。


# **2. 开发者如何使用abi**
我们以web前端开发者为例，可使用web3.js，eth.js以及ether.js，通过上面的abi和合约地址，就可以执行合约方法。
例如：
```js
const Eth = require('ethjs');
const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'));

eth.getBlockByNumber(45300, true, (err, block) => {
  // result null { ...block data... }
});

const etherValue = Eth.toWei(72, 'ether');

//导入abi
const ABI = [{
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs":[{"name": "","type": "uint256"}],
  "payable": false,
  "type": "function",
}];

const contractAddress ='0x6e0E0e02377Bc1d90E8a7c21f12BA385C2C35f78';
//传入合约abi和合约地址
const token = eth.contract(ABI).at(contractAddress);

//调取合约的totalSupply方法
token.totalSupply().then((totalSupply) => {
  // result <BN ...>  4500000
});
```
其他语言，php，python，java也都有类似的库可供使用。

# **3.以太坊开发的一些辅助资料**

#### 以太坊节点统计汇总
[https://www.ethernodes.org/](https://www.ethernodes.org/n)

#### 以太坊的论坛
[https://ethresear.ch/](https://ethresear.ch/)

#### consensys官网
以太坊创始团队离开以太坊基金会后成立的公司.consensys做了什么呢?你熟悉的metamask,truffle,infure等等都出自他们.
[https://consensys.net/](https://consensys.net/)

Pairty公司出品的一切
[https://www.parity.io/technologies/](https://www.parity.io/technologies/)


#### dapp开发

写和一
solidity官方手册(中文)
[https://solidity-cn.readthedocs.io/zh/](https://solidity-cn.readthedocs.io/zh/)

Consensys的以太坊智能合约最佳安全实践
[https://github.com/ConsenSys/smart-contract-best-practices/blob/master/README-zh.md](https://github.com/ConsenSys/smart-contract-best-practices/blob/master/README-zh.md)

Consensys家出品的区块链学习内容平台
[https://beta.kauri.io/articles](https://beta.kauri.io/articles)

不同语言的开发库
.net
[https://nethereum.readthedocs.io/en/latest/](https://nethereum.readthedocs.io/en/latest/)
python版web3
[https://web3py.readthedocs.io/en/stable/](https://web3py.readthedocs.io/en/stable/)

Js（web3之外的最佳选择）
[https://github.com/ethers-io/ethers.js/](https://github.com/ethers-io/ethers.js/)



开发ide：
适用于atom的模块，可将你的atom变成remix那样子
[https://atom.io/packages/etheratom](https://atom.io/packages/etheratom)


*loom出品,Remix之外的另一个选择*
[https://ethfiddle.com/](https://ethfiddle.com/)

*Embark框架-一套合约编译部署*
[https://embark.status.im/](https://embark.status.im/)

*每周以太坊(有两个站)*
[https://weekinethereum.substack.com/](https://weekinethereum.substack.com/)

[http://www.weekinethereum.com/](http://www.weekinethereum.com/)

*学习learn plasma*
[https://www.learnplasma.org](https://www.learnplasma.org)