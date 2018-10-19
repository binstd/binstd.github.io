import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Toast from 'grommet/components/Toast';

import { observer } from 'mobx-react';

const tokenjson = require('../../lib/sol/ERC20Token.json');

import user_model from '../../model/user_model';
import { getMetamaskStatus, web3 } from '../../lib/eth';
//const rpc_url = 'https://mainnet.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4';
import { server_url } from '../../lib/config';
// import queryString  from 'query-string';
import {navigateTo}  from "gatsby-link";

const Create = observer(class DappErc20 extends Component {

    constructor() {
        super();
        this.state = {
            showtoast: false,
            tokenname: '',
            decimal: 18,
            symbol: '',
            total: '',
            chain: ''
        };
    }

    //token name 设置   
    tokennameSet = ({ target: { value } }) => {
        this.setState({ tokenname: value });
    };

    //token 小数点位数 设置
    decimalSet = ({ target: { value } }) => {
        this.setState({ decimal: value });
        console.log(this.state.decimal);
    };

    //  token缩写 设置
    symbolSet = ({ target: { value } }) => {
        this.setState({ symbol: value });
    };

    // token缩写 设置
    totalSet = ({ target: { value } }) => {
        console.log(value);
        this.setState({ total: value });
    };

    chainSet = ({ target: { value } }) => {
        console.log(value);
        this.setState({ chain: value });
    };
    
    delpoyContract() {

        // console.log(httpweb3);
        switch (getMetamaskStatus()) {
            case 'unlockMetamask':
                alert('请先解锁metamask!');
                break;
            case 'noMetamask':
                alert('请在装有metamask的浏览器或trustwallet自带浏览器中打开!');
                break;
            case 'okMetamask':
                let erccontract = web3.eth.contract(tokenjson.abi);
                console.log(web3.eth.accounts[0]);
                var chain = this.state.chain;
                var myContractReturned = erccontract.new(
                    this.state.symbol,
                    this.state.tokenname,
                    this.state.decimal,
                    this.state.total,
                    {
                        from: web3.eth.accounts[0],
                        data: tokenjson.bytecode,
                        gas: '4700000'
                    }, function (err, myContract) {
                        if (!err) {
                            if (!myContract.address) {
                                console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract

                            } else {
                                let auth = "";
                               
                                if (localStorage.getItem("userinfo")) {
                                    let userinfo = JSON.parse(localStorage.getItem("userinfo"));
                                    auth = userinfo.auth.accessToken;
                                    let postData = {
                                        dappName: user_model.username+'erc20',
                                        contractAddress: myContract.address,
                                        publicAddress: user_model.address,
                                        dappChain: chain
                                    }
                                    fetch(`${server_url}/api/dapp`, {
                                        body: JSON.stringify(postData),
                                        headers: {
                                            Authorization: `Bearer ${auth}`,
                                            'Content-Type': 'application/json'
                                        },
                                        method: 'POST'
                                    }).then(response => response.json()).then(data => {
                                        if (data.id) {
                                            navigateTo('/dapp/index')
                                        }
                                    })
                                } 
                                // else {
                                   
                                // }
                                navigateTo('/dapp/index');
                                console.log(myContract.address) // the contract address
                            }
                            

                        }
                    });
            default:
                break;
        }
    }

    render() {
        const { showtoast } = this.state;
        let toast;
        if (showtoast) {
            toast = (
                <Toast
                    status='warning'

                    onClose={() => this.setState({ showtoast: false })}>
                    <Box direction='row' justify='between' alignSelf='center' >
                        <span>DAPP即将上线, 请耐心等待！</span>
                    </Box>
                </Toast>
            );
        }
        return (
            <div className="container">
                <div className="columns  box">
                    <div className="column is-one-quarter">
                        <a
                            className="button  is-white is-rounded"
                            href="/dapp/index"
                        >
                            <span className="icon">
                                <i className="fa fa-arrow-left"></i>
                            </span>
                            <span>返回</span>
                        </a>
                    </div>
                </div>

                <div className="columns is-centered box">
                    <div className="column is-3">
                        <div className="field">
                            <label className="label">token名称:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    className="input is-info" type="text" placeholder="token名称"
                                    onChange={this.tokennameSet}
                                />

                            </div>
                            {/* <p className="help is-danger">token名称得是英文</p> */}
                        </div>

                        <div className="field">
                            <label className="label">token缩写:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    className="input is-info" type="text" placeholder="token缩写"
                                    onChange={this.symbolSet}
                                />

                            </div>
                        </div>

                        <div className="field">
                            <label className="label"> 小数点位数(Decimal):</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    className="input is-info" type="text" placeholder="小数点位数"
                                    onChange={this.decimalSet}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label"> 总发行量:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-info" type="text" placeholder="总发行量"
                                    onChange={this.totalSet}
                                />
                            </div>
                            {/* <p className="help is-danger">请输入整型数字!</p> */}
                        </div>
                        <div className="field">
                            <label className="label"> 选择区块链网络:</label>
                            <div className="control has-icons-left has-icons-right">
                                <div className="select is-info">
                                    <select onChange={this.chainSet} >
                                        <option value="eth_main">ETH主网</option>
                                        <option value="eth_ropsten">ETH-ropsten测试网</option>
                                    </select>
                                </div>
                                {/* <input className="input is-info" type="text" placeholder="总发行量" 
                                    onChange={this.totalSet} 
                                 /> */}
                            </div>
                            {/* <p className="help is-danger">请输入整型数字!</p> */}
                        </div>
                        <div className="field has-text-centered">
                            <a
                                className=" button is-info is-rounded is-fullwidth"
                                onClick={() => this.delpoyContract()}
                            >提交</a>
                        </div>
                    </div>

                </div>

                {toast}
            </div>

        )

    }
});

export default Create
