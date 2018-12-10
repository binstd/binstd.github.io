import React from 'react'
import { server_url } from '../../lib/config';
import fetch from 'node-fetch';
import { navigate } from "@reach/router";
import { web3,eth } from '../../lib/eth';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';

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
});

class DappCreate extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            contract: {},
            inputlist: [],
            deploydata: {},
            userinfo: {}

        }
    }

    componentWillMount() {
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
             this.setState({
                userinfo
             });
        }
        fetch(`${server_url}/api/chain/abi?apiname=${this.props.name}`).then(res => res.json()).then(result => {
            // console.log(data);
            // console.log(result.data);
            let deploydata = {};
            if (result.code == 0) {
                let inputlist = [];
                //console.log(result);
                for (let itemapi of result.data.abi) {
                    if (itemapi.type == 'constructor') {
                        inputlist = itemapi.inputs;
                    }
                }

                for (let data of inputlist) {
                    deploydata[data.name] = '';
                }
                
                this.setState({
                    deploydata
                });
                //console.log(result.data);

                this.setState({
                    contract: result.data,
                    inputlist
                });
            }
        }).catch(function (e) {
            console.log("失败");
        });
       
    }

    SetInput = (name, event) => {
        //console.log(event.target.value);
       // console.log(name);
        let deploydata = this.state.deploydata;
        deploydata[name] = event.target.value;
        this.setState({
            deploydata
        });

    }

    delpoyContract = () => {
        let argument = Object.values(this.state.deploydata)
        // var myContract = new web3.eth.Contract(this.state.contract.abi);
        window.ethereum.enable().then( (accounts) => {
            console.log(accounts);
        })

       console.log(this.state.deploydata);
        eth.accounts().then((accounts) => {
            const SimpleStore = eth.contract(this.state.contract.abi, this.state.contract.bytecode, {
              from: accounts[0],
              gas: 300000,
            });
          
            // create a new contract
            SimpleStore.new(...argument,(error, result) => {
                console.log(result);
                this.postDapp(result);
            //   result null '0x928sdfk...' (i.e. the transaction hash)
            });
        });
  

        // //console.log(this.state.contract);
        // myContract.deploy({
        //     data: this.state.contract.bytecode,
        //     arguments: argument
        // }).send({
        //         from: '0x81D723361d4F3e648F2c9c479d88DC6dEBF4fA5f'
        //     }, (error, transactionHash) => {
        //         console.log(transactionHash, "<==transactionHash");
        //         this.postDapp(transactionHash);
        //     }
        // ).then(function (transactionHash) {
        //         console.log(transactionHash) // instance with the new contract address
        // });


    }



    postDapp = (txhash) => {

        let postData = {
            dappName: '',
            txHash: txhash,
            contractInfo: this.props.name,
            publicAddress: this.state.userinfo.address,
            dappChain: 'kovan' //不应该写死
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
                // navigateTo('/dapp/index')
                navigate(`/dapp/deployed/${txhash}`);
            }
        })
    }

    render() {
       
        let { contract, inputlist } = this.state;
        const { classes } = this.props;
       // console.log(inputlist);
        const contractview = inputlist.map((data, index) => {
            const { name, type } = data;
                return (
                    <Grid key={index}   item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name={name}
                                label={name}
                                onChange={this.SetInput.bind(this,name)}
                                fullWidth
                                autoComplete="billing address-line1"
                            />
                    </Grid>
                );
        });   
        return (
            <div style={{ minHeight: '600px' }}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        合约部署
                    </Typography>
                    <Grid container spacing={24}>

                        {contractview}

                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => this.delpoyContract()}
                    >
                        确认
                    </Button>
                </Paper>
            </div>
        );
    }
}

DappCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DappCreate);



