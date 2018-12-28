import React from 'react';
import fetch from 'node-fetch';
import { server_url } from '../../lib/config';


import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';



import { navigate } from "@reach/router";
const styles = theme => ({

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
      image: {
        maxwidth: '80px',
        maxheight: '80px',
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

    componentDidMount() {
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
                                    <Grid item xs style={{maxWidth:'500px',wordWrap: 'break-word'}} >
                                        <Typography gutterBottom variant="subtitle1">
                                            {contractInfo}
                                         </Typography>
                                              合约地址:
                                            <Typography color="textSecondary"  >   
                                                <a href="http://localhost:8000" color="textSecondary"  target="_blank"  rel="noopener noreferrer" >
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
                {contractview}
            </div >
        )
    }
}

DappList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DappList);




