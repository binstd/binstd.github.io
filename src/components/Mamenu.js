import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { navigate,Link } from "@reach/router";
// import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     marginBottom: 50,
//   },
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
})

class ButtonAppBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          userinfo:{}
        }
    }

    componentDidMount() {
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
             this.setState({
                userinfo
             });
            //user_model.allSet(userinfo);
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
        
    };

    render() {
        const { classes } = this.props;
        const {userinfo} = this.state;
        let user_label;
        if (JSON.stringify(userinfo) === '{}') {
            user_label = <Button color="inherit"  onClick={() => this.login()} > 登陆 </Button>
            // let adr = user_model.address
          
        } else {
            user_label =  
            <div>
            <Button color="inherit"  onClick={() => navigate(`/dapp/${userinfo.address}`)} > 进入dapp </Button>
            <Button color="inherit"  onClick={() => this.handleLoggedOut()} > 退出 </Button>
            </div>
        }

        return (
            <AppBar position="fixed"  className={classes.appBar} >
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
              <Button color="inherit"  onClick={() => navigate(`/`)} >首页</Button>
              <Button color="inherit"  >API</Button>
              </Typography>
              {user_label}
              {/* <Button color="inherit"  onClick={() => this.login()} > 登陆</Button> */}
            </Toolbar>
          </AppBar>
        )
    }
}



// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     // <div className={classes.root}>
//       <AppBar position="fixed"  className={classes.appBar} >
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//           <Button color="inherit">首页</Button>
//           <Button color="inherit">API</Button>
//           </Typography>
//           <Button color="inherit">登陆</Button>
//         </Toolbar>
//       </AppBar>
//     // </div>
//   );
// }

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
