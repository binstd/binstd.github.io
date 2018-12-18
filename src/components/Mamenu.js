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
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import LensIcon from '@material-ui/icons/Lens';

import { eth } from '../lib/eth';
const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     marginBottom: 50,
//   },
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


class ButtonAppBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          userinfo:{},
          anchorEl: null,
          mobileMoreAnchorEl: null,
          network:''
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
        var networkId = '';
        // if (typeof window !== `undefined`) {
        //     eth  = new Eth(window.ethereum);
        // }
       
        if(typeof window !== `undefined`) {
           
            eth.net_version().then((networkId) => {
                this.setState({
                    networkId
                });
            }) 

            window.ethereum.on('networkChanged',  (networkId) => {
              this.setState({
                  networkId
              });
            })
            
            if (localStorage.getItem("userinfo")) {
                let userinfo = JSON.parse(localStorage.getItem("userinfo"));
                 this.setState({
                    userinfo,
                 });
                //user_model.allSet(userinfo);
            }
        }
       
    }

    login() {
        window.ethereum.enable().then( (accounts) => {
            console.log(accounts[0]);
            let userinfo  = {
                logintype: 'ETH',
                address: accounts[0]
            };
            localStorage.setItem("userinfo", JSON.stringify(userinfo));
            this.setState({
                userinfo
            }); 
        })
          
    }

    handleLoggedOut = () => {
        localStorage.removeItem('userinfo');
        // localStorage.removeItem('userdapp');
        // user_model.clearAll();
        this.setState({ userinfo: {} });
        // window.location.reload(true); 
        this.handleMenuClose();
    };

    render() {
        // const { classes } = this.props;

        const { userinfo, anchorEl, mobileMoreAnchorEl,networkId} = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        let user_label;

        //未登陆
        if (JSON.stringify(userinfo) === '{}') {
            user_label = <Button color="inherit"  onClick={() => this.login()} > 登陆 </Button>          
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
              <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
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
              <MenuItem  onClick={this.handleMenuClose}>
                <p>Profile</p>
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
                <LensIcon className={networkColor} style= {{ fontSize: 15, marginRight:'5px' }}/> {networkName} 
             </Button>  
           
            </div>    
        ); 

        return (
            <div className={classes.root}>
            <AppBar position="fixed"  className={classes.appBar} >
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
              <Button color="inherit"  onClick={() => navigate(`/`)} >首页</Button>
              
              <Button color="inherit"  onClick={() => navigate(`/docs/getting-started/info`)} >API</Button>
              </Typography>
              {/* <Button color="inherit" >{network}</Button> */}
              {viewNetwork}
              {/* {network} */}
              {user_label}
            
            </Toolbar>
          </AppBar>
           
            {renderMenu}
            {renderMobileMenu}
            </div>
        )
    }
}




ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
