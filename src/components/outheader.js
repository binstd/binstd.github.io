import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import { getMetamaskStatus, web3 } from '../lib/eth';
import user_model from '../model/user_model';
import { observer } from 'mobx-react';
const AppHeader =  observer(class AppHeader extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
        };
    }

    componentDidMount() {
        
        if(localStorage.getItem("userinfo")){
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            console.log(userinfo);
            user_model.logintypeSet(userinfo.logintype);
            user_model.addressSet(userinfo.address);
        }
    }
    // export default function AppHeader (props) {
    payToken() {
        console.log('userinfo:',user_model.getAllData);
 
        if(!user_model.address&&!user_model.logintype){
            console.log('没有登录');
        }
            // console.log(this.state.redirect_url);
        switch (getMetamaskStatus()) {
            case 'unlockMetamask':
                alert('Unlock metamask first');
                break;
            case 'noMetamask':
                alert('请在装有metamask的浏览器或trustwallet自带浏览器中打开!');
                break;
            case 'okMetamask':
                // alert('login ok!');
                console.log(web3.eth.accounts[0].slice(0,12));
                console.log(web3.toHex("Hello world"),);
                // web3.personal.sign();
                web3.personal.sign(web3.fromAscii('测试登录'), web3.eth.accounts[0], "2222", (error, signedMsg) => {
                    if (error) {
                        console.log('::::');
                        console.warn(error);
                    } else {
                        console.log(web3.toAscii(signedMsg));
                        user_model.logintypeSet('ETH');
                        user_model.addressSet(web3.eth.accounts[0]);
                        localStorage.setItem("userinfo", JSON.stringify({
                            logintype:'ETH',
                            address:web3.eth.accounts[0]
                        }));
                        console.log(user_model.logintype);
                       
                    }
                });
            default:
                break;
        }     
    }

    render() {
        let user_label;
        if(user_model.address&&user_model.logintype){
            let adr = user_model.address
            console.log(typeof user_model.address);
            console.log(user_model.logintype);
            user_label = `${user_model.logintype}:${user_model.address.slice(0,12)}...`;
            console.log(user_label);
        }else{
            user_label  = '登录';
        }

        return (
            <Header
                justify="center"
                fixed={true}
                style={{backgroundColor: '#07AEFF'}}
            >
                <Box size={{ width: { max: 'xxlarge'}}} direction="row"
                    responsive={false} justify="start" align="center"
                    pad={{ horizontal: 'medium' }} flex="grow"  >
                    <Image
                        src='https://programmerinnfile.b0.upaiyun.com/community/10001/20180814/yzdXjjAI4g.png'
                        style={{ height: 30, width: 108, margin: '0 35px 5px 0' }}
                    />
                    {/* <HpiIcon colorIndex="brand" size="large" /> */}
                    <Box pad="small" />
                        <Menu label="导航" inline={true} direction="row">
                            <Anchor path="/">首页</Anchor>
                            <Anchor href="/tags/服务">服务</Anchor>
                            <Anchor href="/docs/zh/started">API</Anchor> 
                            <Anchor href="https://github.com/binstd/tplan" target="_blank" >文档计划</Anchor>
                            <Anchor href="/info">关于</Anchor>
                        </Menu>

                        <Box flex="grow" align="end">
                            <Button label={user_label}
                                style={{ color:'#FFFFFF', borderColor: '#FFFFFF'}}
                                onClick={() => this.payToken()}
                            />
                        </Box>
                </Box>

            </Header>
        );
    };

});


export default AppHeader;


// WEBPACK FOOTER //
// ./src/components/Header.js