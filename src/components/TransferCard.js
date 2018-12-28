import React from 'react';
import fetch from 'node-fetch';
import { server_url } from '../lib/config';


import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// import { navigate, Link } from "@reach/router";
// import { auto } from 'eol';
const styles = theme => ({
    
    root: {
        // flexGrow: 1,
        marginTop: 10
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 600,
        // height: 140,
    },
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
    table: {
        width: "90%",
        margin:'5px auto'
    },

});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class TransferCard extends React.Component {

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
        // const { dapplist } = this.state;
        const { classes } = this.props;
        // const contractview = dapplist.map((data, index) => {
        //     console.log(data);
        //     const { contractInfo, txHash, contractAddress } = data;
        //     return (
        //         <div key={index} className={classes.root}>
        //             <Paper className={classes.paper}>
        //                 <Grid container spacing={24}>
        //                     <Grid item>
        //                         <ButtonBase className={classes.image} onClick={() => navigate(`/dapp/manage/${contractInfo}/${contractAddress}`)} >
        //                             <img className={classes.img} alt="complex" src="https://smartz.io/static/img/erc-20.png" />
        //                         </ButtonBase>
        //                     </Grid>
        //                     <Grid item xs={8} sm container>
        //                         <Grid item xs container direction="column" >
        //                             <Grid item xs style={{ maxWidth: '400px' }} >
        //                                 <Typography gutterBottom variant="subtitle1">
        //                                     {contractInfo}
        //                                 </Typography>
        //                                 合约地址:
        //                                     <Typography color="textSecondary"  >
        //                                     <a href="http://localhost:8000" color="textSecondary" target="_blank" >
        //                                         {txHash}
        //                                     </a>
        //                                 </Typography>
        //                             </Grid>
        //                         </Grid>
        //                     </Grid>
        //                 </Grid>
        //             </Paper>

        //         </div>

        //     );
        // });

        return (
            <div style={{ minHeight: '600px', marginTop: '10px' }} >
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={24}>
                           
                            <Grid item xs={8} sm container>
                                <Grid item xs container direction="column" >
                                    <Grid item xs style={{ maxWidth: '400px' }} >
                                        <Typography gutterBottom variant="subtitle1">
                                            我是合约11
                                         </Typography>
                                            合约地址:
    
                                            <Typography color="textSecondary">
                                                <a href="http://localhost:8000"  color="textSecondary" target="_blank"  rel="noopener noreferrer" >
                                                    luz243434343
                                                </a>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={24}>
                          
                            <Grid item xs={8} sm container>
                                <Grid item xs container direction="column" >
                                    <Grid item xs style={{}} >
                                        <Typography gutterBottom variant="subtitle1">
                                            方法名称: 转账
                                         </Typography>
                                                hashhashhashhashhashhashhashhash
                                            {/* <Typography color="textSecondary"  > */}
                                                输入:
                                                <Table className={classes.table}>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>参数名</TableCell>
                                                            <TableCell numeric>值</TableCell>
                                                            
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows.map(row => {
                                                            return (
                                                                <TableRow key={row.id}>
                                                                    <TableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </TableCell>
                                                                    <TableCell numeric>{row.calories}</TableCell>
                                                                </TableRow>
                                                            );
                                                        })}
                                                    </TableBody>
                                                </Table>
                                           {/* </Typography> */}
                                            {/* <Typography color="textSecondary"  style={{marginTop:'30px'}}> */}
                                               结果:
                                                <Table className={classes.table}>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>参数名</TableCell>
                                                            <TableCell numeric>值</TableCell>
                                                            
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows.map(row => {
                                                            return (
                                                                <TableRow key={row.id}>
                                                                    <TableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </TableCell>
                                                                    <TableCell numeric>{row.calories}</TableCell>
                                                                </TableRow>
                                                            );
                                                        })}
                                                    </TableBody>
                                                </Table>
                                           {/* </Typography> */}

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

            </div >
        )
    }
}

TransferCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransferCard);





