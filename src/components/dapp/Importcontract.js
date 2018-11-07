import React, { Component } from 'react';
// import { Box, Label, Toast, TextInput, Button} from 'grommet/index-commonjs'

import Box from 'grommet/components/Box';
import Toast from 'grommet/components/Toast';
import { observer } from 'mobx-react';

const tokenjson = require('./sol/ERC20Token.json');
import { getMetamaskStatus, web3 } from '../../lib/eth';

const Importcontract = observer(class Importcontract extends Component {

    constructor() {
        super();
        this.state = {
            showtoast: false,
            tokenname: '',
            decimal: 18,
            symbol: '',
            total: ''
        };
    }

    componentDidMount() {
        // console.log(this.props.location.search);
        console.log("*****************************　　\n \n \n");
        console.log("我是:/component/dapp/importcontract.js");
        console.log("\n \n \n***************************** \n");
        console.log(tokenjson.abi);
        console.log(tokenjson.bytecode);
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

                                // check address on the second call (contract deployed)
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
                <div className="columns is-centered box">
                    <div className="column is-3">
                        <div className="field">
                            <label className="label">token名称:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input 
                                    className="input is-info" type="text" placeholder="token名称"  
                                    onChange={this.tokennameSet}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
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
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                            {/* <p className="help is-danger">token缩写, 而非全称</p> */}
                        </div>

                        <div className="field">
                            <label className="label"> 小数点位数(Decimal):</label>
                            <div className="control has-icons-left has-icons-right">
                                <input 
                                    className="input is-info" type="text" placeholder="小数点位数" 
                                    onChange={this.decimalSet} 
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                            {/* <p className="help is-danger">请输入小数点位数（需输入整数）</p> */}
                        </div>

                         <div className="field">
                            <label className="label"> 总发行量:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-info" type="text" placeholder="小数点位数"  
                                  onChange={this.totalSet} 
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                            {/* <p className="help is-danger">请输入整型数字!</p> */}
                        </div> 
                        <div className="field has-text-centered">
                         <a 
                            className=" button is-info is-rounded is-fullwidth"
                            onClick={() => this.delpoyContract()}
                        >导入</a>
                        </div> 
                    </div>
                    
                </div>
                       
                {toast}
            </div>

        )

    }
});

export default Importcontract
