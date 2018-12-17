import React, { Component } from 'react';
import fetch from 'node-fetch';
import { server_url } from '../../lib/config';


import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';


import Avatar from '@material-ui/core/Avatar';

import { navigate,Link } from "@reach/router";
const styles = theme => ({
    // paper: {
    //     maxWidth: '650px',
    //     margin: '5px auto',
    //     marginTop: theme.spacing.unit * 3,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    // },
    root: {
        // flexGrow: 1,
        marginTop:10
      },
      paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 660,
        height:140,
      },
    //   paper: {
    //     maxWidth: 600,
    //     margin: `${theme.spacing.unit}px auto`,
    //     padding: theme.spacing.unit * 2,
    //   },
      image: {
        width: '100px',
        height: '100px',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '80px',
        maxHeight: '80px',
      },
  
});

class DappList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dapplist: []
        }
    }

    componentWillMount() {
        fetch(`${server_url}/api/dapp/${this.props.address}?chain=eth_ropsten`).then(res => res.json()).then(result => {
            console.log(result);
            this.setState({
                dapplist: result
            });
            // let deploydata = {};
        }).catch(function (e) {
            console.log("失败");
        });
    }

    render() {
        const { dapplist } = this.state;
        const { classes } = this.props;
        const contractview = dapplist.map((data, index) => {
            console.log(data);
            const { contractInfo, txHash,contractAddress } = data;
            return (
                <div  key={index} className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={24}>
                            <Grid item>
                                <ButtonBase className={classes.image}  onClick={() => navigate(`/dapp/manage/${contractInfo}/${contractAddress}`)} >
                                    <img className={classes.img} alt="complex" src="https://smartz.io/static/img/erc-20.png" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={8} sm container>
                                <Grid item xs container direction="column" >
                                    <Grid item xs style={{maxWidth:'400px'}} >
                                        <Typography gutterBottom variant="subtitle1">
                                            {contractInfo}
                                         </Typography>
                                              合约地址:
                                            <Typography color="textSecondary"  >   
                                                <a href="http://localhost:8000" color="textSecondary"  target="_blank" >
                                                {txHash} 
                                                </a>
                                            </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    
                </div>
             
            );
        });

        return (
            <div style={{ minHeight: '600px',marginTop:'80px' }} >
                {/* <p className="title is-5 is-spaced">我的合约列表:</p> */}
                {contractview}
            </div >
        )
    }
}

DappList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DappList);




