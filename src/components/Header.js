import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import { getMetamaskStatus, web3 } from '../lib/eth';
import { server_url } from '../lib/config';
import user_model from '../model/user_model';
import { observer } from 'mobx-react';
// const windowGlobal = typeof window !== 'undefined' && window;

const AppHeader = observer(class AppHeader extends Component {
    
    constructor() {
        super();
        this.state = {
            username: '',
            auth: '',
            id: '',
        };
    }

    componentDidMount() {
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            user_model.allSet(userinfo);
        }
    }

    payToken() {
        if(!user_model.address&&!user_model.logintype){
            console.log('没有登录');
        }
    
        switch (getMetamaskStatus()) {
            case 'unlockMetamask':
                alert('请先解锁metamask!');
                break;
            case 'noMetamask':
                alert('请在装有metamask的浏览器或trustwallet自带浏览器中打开!');
                break;
            case 'okMetamask':
                const publicAddress = web3.eth.accounts[0].toLowerCase();
                console.log("\n server_url",server_url);
                fetch(
                    `${server_url}/users?publicAddress=${publicAddress}`
                ).then( response => response.json() ).then (
                    users => (users.length ? users[0] : this.handleSignup(publicAddress))
                ).then(this.handleSignMessage)
                .then(this.handleAuthenticate)
                .then(this.handleLoggedIn).catch(err => {
                    window.alert(err);
                });
            default:
                break;
        }    

       
    }
<<<<<<< HEAD
    //web3登录
    handleSignMessage = ({ publicAddress, nonce }) => {
=======
    //web3登陆
    handleSignMessage = ({ publicAddress, nonce, id }) => {
        this.setState({ 
            id
        });
>>>>>>> 6cdf8914c5dc4e1f3ba31392743e8959cfa0bafb
        return new Promise((resolve, reject) =>
            web3.personal.sign(
                web3.fromUtf8(`I am signing: ${nonce}`),
                publicAddress,
                (err, signature) => {
                    if (err) return reject(err);
                    console.log('\n signature:', signature);
                    return resolve({ publicAddress, signature });
                }
            )
        );
    };

    // 获取权限
    handleAuthenticate = ({ publicAddress, signature }) =>
        fetch(`${server_url}/auth`, {
            body: JSON.stringify({ publicAddress, signature }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

     //登录
     handleLoggedIn = auth => {
        let userinfo  = {
            logintype: 'ETH',
            address: web3.eth.accounts[0].toLowerCase(),
            auth: auth,
            id:this.state.id
        };
        console.log('auth', auth);
        console.log('\n userinfo:',userinfo);
        user_model.allSet(userinfo);
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        console.log(user_model.logintype);
        this.setState({ auth });
    };
    
<<<<<<< HEAD
    // 退出登录
=======

    // 退出登陆  
>>>>>>> 6cdf8914c5dc4e1f3ba31392743e8959cfa0bafb
    handleLoggedOut = () => {
        localStorage.removeItem('userinfo');
        user_model.clearAll();
        this.setState({ auth: undefined });
    };


    //提交新地址
    handleSignup = publicAddress =>
        fetch(`${server_url}/users`, {
            body: JSON.stringify({ publicAddress }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
    }).then(response => response.json());

    render() {
        let user_label;
        if (user_model.address && user_model.logintype) {
            let adr = user_model.address
            user_label = <Menu responsive={false}
                inline={false}
                label={`${user_model.logintype}:...${user_model.address.slice(0, 8)}`}
                primary={false}
                direction='row'
                closeOnClick={false}>
                <Anchor
                    href='/userinfo'
                    style={{ color: 'aliceblue' }}
                    // className='active' 
                >
                    个人中心
                </Anchor>

                <Anchor
                    href='#'
                    style={{ color: 'aliceblue' }}
                    onClick={() => this.handleLoggedOut()}
                >
                    退出登录
                </Anchor>
            </Menu>;
        } else {
            user_label = <Button
                label={'登录'}
                style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}
                onClick={() => this.payToken()}
            />;
        }

        return (
            <Header
                justify="center"
                fixed={true}
                style={{ backgroundColor: '#07AEFF' }}
            >
                <Box size={{ width: { max: 'xxlarge' } }} direction="row"
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
<<<<<<< HEAD
=======
                        {/* <Anchor href="/tags/服务">服务</Anchor> */}
>>>>>>> 6cdf8914c5dc4e1f3ba31392743e8959cfa0bafb
                        <Anchor href="/docs/zh/started">API</Anchor>
                        <Anchor href="https://github.com/binstd/tplan" target="_blank" >文档计划</Anchor>
                        <Anchor href="/info">关于</Anchor>
                    </Menu>

                    <Box flex="grow" align="end">
                        {user_label}
                    </Box>
                </Box>

            </Header>
        );
    };

});


export default AppHeader;