import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Toast from 'grommet/components/Toast';

import { observer } from 'mobx-react';

const tokenjson = require('./sol/ERC20Token.json');

import { getMetamaskStatus, web3 } from '../../lib/eth';
const rpc_url = 'https://mainnet.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4';

const Create = observer(class DappErc20 extends Component {
    constructor() {
        super();
        this.state = {
            showtoast: false,
            tokenname: '',
            decimal: 18,
            symbol: '',
            total: 1000000
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
    
    delpoyContract() {
        console.log(' tokenname:', this.state.tokenname);
        console.log(' symbol:', this.state.symbol);
        console.log(' decimal:', this.state.decimal);
        console.log(' total: ', this.state.total);
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
                                    className="input is-info" type="text" placeholder="oken缩写"  
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
                                <input className="input is-info" type="text" placeholder="小数点位数"  />
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
