import React from 'react'
import { server_url } from '../../lib/config';
import fetch from 'node-fetch';
import { navigate } from "@reach/router";
//import { web3 } from '../../lib/eth';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import Mamenu from '../../components/Mamenu';
const drawerWidth = 240;

const styles = theme => ({
    paper: {
        maxWidth: '550px',
        margin: 'auto',
        marginTop: theme.spacing.unit * 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

class DappCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contract: {},
            inputlist: [],
            deploydata: {},
            askapi:[],
            writeapi:[],
        }
    }

    componentWillMount() {
        fetch(`${server_url}/api/chain/abi?apiname=ERC20Basic`).then(res => res.json()).then(result => {
            // console.log(data);
            // console.log(result.data);
            let deploydata = {};
            if (result.code == 0) {
                let askapi = [];
                let writeapi = [];
                //console.log(result);
                for (let itemapi of result.data.abi) {
                    console.log(itemapi);
                    if (itemapi.type == 'function') {
                        if(itemapi.constant == true) {
                            askapi.push(itemapi);
                        }else {
                            writeapi.push(itemapi);
                        }
                    }
                }
         
                console.log(writeapi);    
                console.log(askapi);   
                this.setState({
                    writeapi,
                    askapi
                });
            }
        }).catch(function (e) {
            console.log("失败");
        });

    }

    SetInput = (name, event) => {
 
        let deploydata = this.state.deploydata;
        deploydata[name] = event.target.value;
        this.setState({
            deploydata
        });

    }

    delpoyContract = () => {
        console.log(this.state.deploydata);
       
    }

    postDapp = (txhash) => {
        
        let postData = {
            dappName: '',
            txHash: txhash,
            contractInfo: this.props.name,
            publicAddress: '0x81D723361d4F3e648F2c9c479d88DC6dEBF4fA5f',
            dappChain: 'kovan'
        }

        fetch(`${server_url}/api/dapp`, {
            body: JSON.stringify(postData),
            headers: {
                // Authorization: `Bearer ${auth}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json()).then(data => {
            if (data.id) {
                navigate(`/dapp/deployed/${txhash}`);
            }
        })
    }

    render() {
        let { writeapi, askapi } = this.state;
        const { classes } = this.props;
          
        return (
            <div className={classes.root}>
            {/* <CssBaseline /> */}
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
                <List>
                    {askapi.map((data, index) => (
                    <ListItem button key={index}>
                        {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                        <ListItemText primary={data.name} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {writeapi.map((data, index) => (
                    <ListItem button key={index}>
                        {/* <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                        <ListItemText primary={data.name} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>

            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Typography paragraph>
                liuliang
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </main>
          </div>
        );
    }
}

DappCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DappCreate);





