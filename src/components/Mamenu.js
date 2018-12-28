import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { navigate } from "@reach/router";

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import LensIcon from '@material-ui/icons/Lens';

import { eth } from '../lib/eth';

import user_model from '../model/user_model';
import { observer } from 'mobx-react';
import { server_url } from '../lib/config';

const styles = theme => ({

  root: {
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },  
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  colorMain:{
      color:'#1abc9c'
  },
  colorRopsten:{
    color:'#FF3E96'
  },
  colorRinkeby:{
    color:'#FFD700'
  },
  colorKovan:{
    color:'#690496'
  }
})


const ButtonAppBar = observer(class ButtonAppBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          userinfo:{},
          anchorEl: null,
          mobileMoreAnchorEl: null,
          network:'',
          address:''
        }
    }
    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
    };
    
    handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
    };
    
    componentWillMount() {
        // var networkId = '';
        if(typeof window !== `undefined`) {
            this.login();
            eth.net_version().then((networkId) => {
                this.setState({
                    networkId
                });
            }); 

            window.ethereum.on('networkChanged',  (networkId) => {
              this.setState({
                  networkId
              });
            });

            if (localStorage.getItem("userinfo")) {
                let userinfo = JSON.parse(localStorage.getItem("userinfo"));
                 this.setState({
                    userinfo,
                 });
            }
        }
       
    }

    //新登陆
    login() {
        window.ethereum.enable().then( (accounts) => {
            console.log(accounts[0]);
            // let userinfo = {
            //     logintype: 'ETH',
            //     address: accounts[0]
            // };
            // localStorage.setItem("userinfo", JSON.stringify(userinfo));
            this.setState({
                address: accounts[0]
            }); 
        })
          
    }  

    // login() {
    //     window.ethereum.enable().then((accounts) => {
    //         console.log(accounts[0]);
    //         let userinfo = {
    //             logintype: 'ETH',
    //             address: accounts[0]
    //         };
    //         localStorage.setItem("userinfo", JSON.stringify(userinfo));
    //         this.setState({
    //             userinfo
    //         });
    //     })

    // }



    //陇余代码
    payToken() {
        if(!user_model.address&&!user_model.logintype){
            console.log('没有登录');
        }
        window.ethereum.enable().then( (accounts) => {
            const publicAddress = accounts[0];
            console.log("\n server_url",server_url);
            fetch(
                `${server_url}/api/users?publicAddress=${publicAddress}`
            ).then( response => response.json() ).then (
                users => (users.length ? users[0] : this.handleSignup(publicAddress))
            ).then(this.handleSignMessage)
            .then(this.handleAuthenticate)
            .then(this.handleLoggedIn).catch(err => {
                window.alert(err);
            });
        })
     
    }

    // web3登录
    handleSignMessage = ({ publicAddress, nonce, id }) => {
        this.setState({ 
            id
        });

        return new Promise((resolve, reject) =>
            window.web3.personal.sign(
                window.web3.fromUtf8(`I am signing: ${nonce}`),
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
        fetch(`${server_url}/api/auth`, {
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
            address: window.web3.eth.accounts[0].toLowerCase(),
            auth: auth,
            id:this.state.id
        };
        
        user_model.allSet(userinfo);
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        console.log(user_model.logintype);
        this.setState({ auth });
        window.location.reload(true); 
    };
    
    // 退出登录
    handleLoggedOut = () => {
        localStorage.removeItem('userinfo');
        localStorage.removeItem('userdapp');
        user_model.clearAll();
        this.setState({ auth: undefined });
        window.location.reload(true); 
        
    };

    //提交新地址
    handleSignup = publicAddress =>
        fetch(`${server_url}/api/users`, {
            body: JSON.stringify({ publicAddress }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
    }).then(response => response.json());

    render() {
        // const { classes } = this.props;
        const { userinfo, anchorEl, mobileMoreAnchorEl,networkId} = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        let user_label;

        //未登陆
        if (JSON.stringify(userinfo) === '{}') {
            user_label = <Button color="inherit"  onClick={() => this.payToken()} > 登陆 </Button>          
        } else {
            //已登陆
            user_label =  
            <div>
            {/* <Button color="inherit"  onClick={() => navigate(`/dapp/${userinfo.address}`)} > dapp </Button> */}
            <div className={classes.sectionDesktop} >
                <Button color="inherit"  onClick={() => navigate(`/dapp/${userinfo.address}`)} > dapp </Button>
                <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
                
                >
                  <AccountCircle />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                </IconButton>
            </div>
            </div>
        }

        const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={() => navigate(`/userinfo`)} >个人中心</MenuItem>
              <MenuItem onClick={() => this.handleLoggedOut()} >退出</MenuItem>
              {/* <Button color="inherit"  > 退出 </Button> */}
            </Menu>
          );
      
          const renderMobileMenu = (
            <Menu
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMobileMenuOpen}
              onClose={this.handleMobileMenuClose}
            >

              <MenuItem  onClick={() => navigate(`/userinfo`)} >
                <p>个人中心</p>
              </MenuItem>
              <MenuItem   onClick={() => navigate(`/dapp/${userinfo.address}`)}  >
                <p>我的Dapp</p>
              </MenuItem>
             
              <MenuItem onClick={() => this.handleLoggedOut()}>
              
                <p>退出</p>
              </MenuItem>
            </Menu>
          );
          let networkName,networkColor = ''
          switch (networkId) {
            case "1":
                networkColor = classes.colorMain;
                networkName = 'main'
                break
            case "2":
                networkColor = '';
                networkName = 'morden'
                break
            case "3":
                networkColor = classes.colorRopsten;
                networkName = 'ropsten'
                break
            case "4":
                networkColor = classes.colorRinkeby;
                networkName = 'rinkeby'
                break
            case "42":
                networkColor = classes.colorKovan;
                networkName = 'kovan'
                break
            default:
                networkName = ' '
        }
        const viewNetwork = (
            <div>
             <Button color="inherit"  onClick={() => this.login()} > 
                <LensIcon className={networkColor}  style= {{ fontSize: 15, marginRight:'5px' }} /> {networkName} 
             </Button>  
           
            </div>    
        ); 

        return (
            <div className={classes.root}>
                <AppBar position="fixed"  className={classes.appBar} >
                    <Toolbar>
                        <div className={classes.sectionDesktop} >
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <img
                                src='https://programmerinnfile.b0.upaiyun.com/community/10001/20180814/yzdXjjAI4g.png'
                                style={{ height: 30, width: 108, margin: '0 35px 5px 0' }}
                            />
                        </IconButton>
                        </div>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <Button color="inherit"  onClick={() => navigate(`https://www.binstd.com/`)} >官网</Button>
                            <Button color="inherit"  onClick={() => navigate(`/`)} >Dapp部署</Button>
                            <Button color="inherit"  onClick={() => navigate(`/docs/getting-started/info`)} >API</Button>
                        </Typography>
                        <div className={classes.sectionDesktop} >
                        {viewNetwork}
                        </div>
                        {user_label}
                    </Toolbar>

                    {renderMenu}
                    {renderMobileMenu}
                </AppBar>
            
             </div>
        )
    }
});



ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
