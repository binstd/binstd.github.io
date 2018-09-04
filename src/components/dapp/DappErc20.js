import React, { Component } from 'react';
// import { Box, Label, Toast, TextInput, Button} from 'grommet/index-commonjs'

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Toast from 'grommet/components/Toast';
import TextInput from 'grommet/components/TextInput';
// const solc = require('solc');
// import solcjs from 'solc';

import { observer } from 'mobx-react';
// const sol = require('./sol/erc20.sol');
const tokenjson =  require('./sol/ERC20Token.json');
// import Web3 from 'web3';
import { getMetamaskStatus, web3 } from '../../lib/eth';
const rpc_url = 'https://mainnet.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4';

const DappErc20 = observer(class DappErc20 extends Component {
    constructor() {
        super();
        this.state = {
            showtoast: false,
            tokenname:'',
            decimal:18,
            symbol:'',
            total:1000000
        };

    }

    componentDidMount() {
        // console.log(this.props.location.search);
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

    delpoyContract(){
        // alert('正在部署合约！');
        // let httpweb3 = new Web3(new Web3.providers.HttpProvider(rpc_url));
        console.log('\n tokenname', this.state.tokenname);
        console.log('\n symbol', this.state.symbol);
        console.log('\n decimal', this.state.decimal);
        console.log('\n total: ',this.state.total);
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
                // let gasEstimate = httpweb3.eth.estimateGas({data: tokenjson.deployedBytecode});
                // var contractInstance = erccontract.new([constructorParam1] [, constructorParam2], {data: '0x12345...', from: myAccount, gas: 1000000});
                var myContractReturned = erccontract.new(
                    this.state.symbol, 
                    this.state.tokenname, 
                    this.state.decimal,  
                    this.state.total,
                    {
                        from:web3.eth.accounts[0],
                        data:tokenjson.bytecode,
                        gas:'4700000'}, function(err, myContract){
                        if(!err) {
                            // NOTE: The callback will fire twice!
                            // Once the contract has the transactionHash property set and once its deployed on an address.
                            // e.g. check tx hash on the first call (transaction send)
                            if(!myContract.address) {
                                console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
                            
                            // check address on the second call (contract deployed)
                            } else {
                                console.log(myContract.address) // the contract address
                            }
                            // Note that the returned "myContractReturned" === "myContract",
                            // so the returned "myContractReturned" object will also get the address set.
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
            <Box
                align='center'
            //   colorIndex='light-2'
            //    pad='medium'
            //    margin='small'    
            >
          
                <Box 
                    // justify='center'
                    // direction='row'
                    // align='center'
                    wrap={false}
                    // pad='medium'
                    // margin='small'    
                    // colorIndex='light-2'
                >
                    <Label>
                    Token名称
                    </Label>
                    <TextInput
                        // name='item-1'
                        onDOMChange={this.tokennameSet}
                    />
                </Box>
                <Box 
                    //  direction='row'
                    // justify='center'
                    // align='center'
                    wrap={false}
                    // pad='medium'
                    // margin='small'    
                    // colorIndex='light-2'
                >
                    <Label>
                    Token缩写
                    </Label>
                    <TextInput
                        // name='item-1'
                        onDOMChange={this.symbolSet}
                    />
                </Box>
                <Box 
                    // direction='row'
                    // justify='center'
                    // align='center'
                    wrap={false}
                    // pad='medium'
                    // margin='small'    
                    // colorIndex='light-2'
                >
                    <Label>
                    小数点位数(Decimal)
                    </Label>
                    <TextInput
                        // name='item-1'
                        onDOMChange={this.decimalChange}
                    />
                </Box>
                
                <Box 
                    justify='center'
                    align='center'
                    wrap={false}
                    pad='medium'
                    // margin='small'    
                    // colorIndex='light-2'
                >
                    <Button
                            // icon={<Edit />}
                            // accent={false}
                            primary={true}
                            label='确认'
                            onClick={() => this.delpoyContract()}
                            // href='#'
                        />
                </Box>
                {toast}
            </Box>
        )

    }
});

export default DappErc20
