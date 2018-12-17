import React from 'react'
import { server_url } from '../../lib/config';
import { transFunc,transInput } from '../../lib/translate';
import fetch from 'node-fetch';
import { navigate } from "@reach/router";
//import { web3 } from '../../lib/eth';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import Mamenu from '../../components/Mamenu';
import Massage from '../../components/Massage';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TransferCard from '../../components/TransferCard';

import { eth,Eth } from '../../lib/eth';

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
    dialog:{
        minWidth:'600px',
        margin:'auto'
    }
});


class DappCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false, //弹出输入开发
            messageIsOpen:false, //弹出消息开关
            messageText:'', //弹出消息开关
            contractabi: [], //全部abi
            inputlist: [],
            deploydata: {},
            askapi:[],
            writeapi:[],
            todoFunctionAbi:{}, //要执行的方法abi
            transferJson:{}
        }
    }

    handleClickOpen = (data) => {
        // console.log('32323:',data);
        if(data.inputs.length == 0) {
            console.log(data);
            
            //alert(data.name);
            eth.accounts().then((accounts) => {
                const SimpleStore = eth.contract(this.state.contractabi).at(this.props.contractAddress);    
                 // use a method that comes with the contract
                SimpleStore[data.name]().then((txHash) => {
                    let messageText = '';
                    console.log('typeof txHash => \n',typeof txHash[0]);
                    if(typeof txHash[0] === 'object'){
                        //console.log(txHash[0].toString());
                        messageText = txHash[0].toString();
                    }else {
                        messageText = txHash[0];
                    }
                    
                    this.setMessage(true,messageText)
              });
            
            });
        } else {
            console.log(data);

            let deploydata = {};
            
            if(data.inputs){
                for (let item of data.inputs) {
                    deploydata[item.name] = '';
                }
            }    
            
            this.setState({
                todoFunctionAbi:data,
                open: true, 
                deploydata
            });
            
        }
        //this.setState({ open: true });
    }
    
    //
    handleClose = () => {
        this.setState({ open: false });
    }

    //
    setMessage = (isOpen, messageText) => {
        console.log(isOpen,typeof messageText);
        // messageText
        if(isOpen){
            this.setState({
                messageIsOpen:isOpen,
                messageText
            });
        } else {
            this.setState({
                messageIsOpen:isOpen
            });
        }
    }

    componentWillMount() {
        console.log(this.props.contractName);
        console.log(this.props.contractAddress);
        fetch(`${server_url}/api/chain/abi?apiname=${this.props.contractName}`).then(res => res.json()).then(result => {
            // console.log(data);
            console.log(result.data);
            let deploydata = {};
            if (result.code == 0) {
                let askapi = [];
                let writeapi = [];
                //console.log(result);
                for (let itemapi of result.data.abi) {
                    //console.log(itemapi);
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
                    askapi,
                    contractabi:result.data.abi,
                    transferJson:result.data.translate
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
        console.log('this.state.deploydata:',this.state.deploydata);
        const todoFunctionAbi = this.state.todoFunctionAbi;
        let argument = Object.values(this.state.deploydata)
        // var myContract = new web3.eth.Contract(this.state.contract.abi);
        window.ethereum.enable().then( (accounts) => {
            console.log(accounts);
        })

        this.handleClose();
        eth.accounts().then((accounts) => {
             
            const SimpleStore = eth.contract(this.state.contractabi).at(this.props.contractAddress);    
       

            SimpleStore[todoFunctionAbi.name](...argument,{from:accounts[0]},(error, result) => {
         
                if(!error){
                    console.log('result:',result);
                    // this.postDapp(result);
                    let messageText = '';
                    console.log('typeof txHash => \n',typeof result[0]);
                    if(typeof result[0] === 'object'){
                        //console.log(txHash[0].toString());
                        messageText = result[0].toString();
                    }else {
                        messageText = result[0];
                    }
                    
                    this.setMessage(true,messageText)

                } else {
                    console.log('error:',error);
                }
        
            });
            
        });
    }

    delpoyContractt = () => {
        let argument = Object.values(this.state.deploydata)
        // var myContract = new web3.eth.Contract(this.state.contract.abi);
        window.ethereum.enable().then( (accounts) => {
            console.log(accounts);
        })

       console.log(this.state.deploydata);
        eth.accounts().then((accounts) => {
            const SimpleStore = eth.contract(this.state.contract.abi, this.state.contract.bytecode, {
              from: accounts[0],
              gas: 4000000,
            });
          
            // create a new contract
            SimpleStore.new(...argument,(error, result) => {
                //console.log('error:',error);
                if(!error){
                    this.postDapp(result);
                }
                //console.log('result:',result);
                
            //   result null '0x928sdfk...' (i.e. the transaction hash)
            });
        });
  

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
        let { writeapi, askapi,todoFunctionAbi,transferJson } = this.state;
        const { classes } = this.props;
        var contractview = ''
       
       if(todoFunctionAbi.inputs){
            contractview = todoFunctionAbi['inputs'].map((data, index) => {
                const { name, type } = data;
                    return (
                        <Grid key={index}   item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name={name}
                                    label={transInput(transferJson,todoFunctionAbi.name, name)}
                                    onChange={this.SetInput.bind(this,name)}
                                    fullWidth
                                    autoComplete="billing address-line1"
                                />
                        </Grid>
                    );
            }); 
       }
        
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
                        <ListItemText primary={transFunc(transferJson , data.name)} onClick={() => this.handleClickOpen(data)} />
                    </ListItem>
                    ))}

                </List>
                <Divider />
                <List>
                    {writeapi.map((data, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={transFunc(transferJson , data.name)} onClick={() => this.handleClickOpen(data)} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>

            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Typography paragraph>
                    <TransferCard />  
              </Typography>
            </main>
                <Dialog
                    className={classes.dialog} 
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                        <DialogTitle id="form-dialog-title">方法名称:{transFunc(transferJson , todoFunctionAbi.name)} </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                调用此方法将触发区块链钱包做签名，请慎重操作
                            </DialogContentText>
                            {contractview}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                            Cancel
                            </Button>
                            <Button  onClick={() => this.delpoyContract()} color="primary">
                            submit
                            </Button>
                        </DialogActions>
                </Dialog>
                <Massage messageIsOpen={this.state.messageIsOpen} messageText={this.state.messageText}  setMessage = {isOpen => this.setMessage(isOpen)}/>
          </div>
        );
    }
}

DappCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DappCreate);





