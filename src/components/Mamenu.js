import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { navigate } from "@reach/router";



import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

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
        var network = '';
        // if (typeof window !== `undefined`) {
        //     eth  = new Eth(window.ethereum);
        // }
        if(typeof window !== `undefined`) {
            eth.net_version().then((result) => {
                switch (result) {
                    case "1":
                        console.log('This is mainnet')
                        network = 'eth_main'
                        break
                    case "2":
                        console.log('This is the deprecated Morden test network.')
                        network = 'eth_morden'
                        break
                    case "3":
                        console.log('This is the ropsten test network.')
                        network = 'eth_ropsten'
                        break
                    case "4":
                        console.log('This is the Rinkeby test network.')
                        network = 'eth_rinkeby'
                        break
                    case "42":
                        console.log('This is the Kovan test network.')
                        network = 'eth_kovan'
                        break
                    default:
                        console.log('This is an unknown network.')
                        network = 'eth_unknown'
                }

                this.setState({
                    network
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
        // eth.net_version().then((result) => {
        //     console.log(result);
        // })
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

        const { userinfo, anchorEl, mobileMoreAnchorEl,network} = this.state;
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
              {network}
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
