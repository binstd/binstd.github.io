// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

// import Grid from '@material-ui/core/Grid';

// import { server_url } from '../lib/config';
// import fetch from 'node-fetch';
// import Card from './card';
// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     boxShadow: 'none',
//     padding:'30px',
//     marginTop: '50px',
    
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });


// class FullWidthGrid extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             contract: []
//         }
//     }
    
//     componentDidMount() {
//         fetch(`${server_url}/api/chain/allcontractlist`).then(response => response.json())
//             .then(result => {
//                 if (result.code === 0) {
//                     // console.log(result);
//                     this.setState({
//                         contract: result.data
//                     });
//                 }
//             }).catch(err => {
//                 console.log(err);
//             });
//     }

//     render() {
//        // let { contract } = this.state;
//         const { classes } = this.props;

//         const { contract } = this.state;
//         // console.log(contract);
//         const Gridview = contract.map((data, index) => {
//             // const { title, description, contractName } = data;
//             return (
//                 <Grid  key={index} item xs={12} sm={6} >
//                     <Card option={data} />
//                 </Grid>
          
//             );

//         });
//         //console.log(classes.root);
//         return (
//             <div className={classes.root} >
//                 <Grid container spacing={24}>
//                    {Gridview}
//                 </Grid>
//             </div>
//         );
//     }
// }


// FullWidthGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(FullWidthGrid);


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import fetch from 'node-fetch';
import { server_url } from '../lib/config';
import { navigate } from "@reach/router";

import Card from './card';
const styles = theme => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    padding:'30px',
    marginTop:'50px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class FullWidthGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contract: []
        }
    }
    componentWillMount() {
        fetch(`${server_url}/api/chain/allcontractlist`).then(response => response.json())
            .then(result => {
                if (result.code == 0) {
                    // console.log(result);
                    this.setState({
                        contract: result.data
                    });
                }
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
       // let { contract } = this.state;
        const { classes } = this.props;

        const { contract } = this.state;
        // console.log(contract);
        const Gridview = contract.map((data, index) => {
            const { title, description, contractName } = data;
            return (
                <Grid  key={index} item xs={12} sm={6} >
                    <Card option={data} />
                </Grid>
          
            );

        });
        //console.log(classes.root);
        return (
            <div className={classes.root} >
                <Grid container spacing={24}>
                   {Gridview}
                </Grid>
            </div>
        );
    }
}



FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
