import React from 'react'
import { observer } from 'mobx-react';

import { server_url } from '../lib/config';
import { transInput } from '../lib/translate';

import fetch from 'node-fetch';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';
import Mamenu from '../components/Mamenu';
import MaLayout from '../components/MaLayout'

// const styles = theme => ({
//     paper: {
//         maxWidth: '550px',
//         margin: 'auto',
//         marginTop: theme.spacing.unit * 12,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 3}px`,
//     },
//     avatar: {
//         margin: theme.spacing.unit,
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing.unit,
//     },
//     submit: {
//         marginTop: theme.spacing.unit * 3,
//     },
// });

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      wordWrap: 'break-word',
      marginTop:'10px',
      margin:'20px'
    },
});

class UserinfoPage extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            user: null,
            username: '',
            auth: '',
            uid: '',
            address: ''
        };
    }

    componentDidMount() {
        let auth, uid = '';
        if (localStorage.getItem("userinfo")) {
            let userinfo = JSON.parse(localStorage.getItem("userinfo"));
            auth = userinfo.auth.accessToken;
            uid = userinfo.id;
            this.setState({
                auth,
                address: userinfo.address,
                uid
            });

            console.log('\n auth: ', auth);
        }

        fetch(`${server_url}/api/users/${uid}`, {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        })
            .then(response => response.json())
            .then(user => {
                this.setState({ user });
                console.log(user);
            }).catch(window.alert);

    }


    handleChange = ({ target: { value } }) => {
        this.setState({ username: value });
    };

    handleSubmit = ({ target }) => {
        console.log(this.state.user);
        const { auth, user, username } = this.state;
        this.setState({ loading: true });
        fetch(`${server_url}/api/users/${user.id}`, {
            body: JSON.stringify({ username }),
            headers: {
                Authorization: `Bearer ${auth}`,
                'Content-Type': 'application/json'
            },
            method: 'PATCH'
        }).then(response => response.json())
            .then(user => this.setState({ loading: false, user }))
            .catch(err => {
                window.alert(err);
                this.setState({ loading: false });
            });
    };


    render() {
        // let { inputlist,transferJson } = this.state;
        const { classes } = this.props;
        const { auth, loading, user, address } = this.state;
        const username = user && user.username;
        if (username) {
            console.log('username:', username);
        }

        return (
            <MaLayout>
                {/* word-wrap: break-word  */}
                <div style={{ minHeight: '600px',maxWidth:'700px',wordWrap: 'break-word',margin:'auto',marginTop:'100px' }}>
                    <Paper className={classes.root} >
                        <Typography variant="h5" component="h3">
                           用户名:
                        </Typography>

                        {/* <Typography  type="body1" > */}
                  
                        {username ? <p>{username}</p> : <p>'未设置'</p>}
                        {/* </Typography> */}
                    </Paper>
                    <Paper className={classes.root} >
                        <Typography variant="h5" component="h3">
                          地址:
                        </Typography>

                        <Typography  type="body1" >
                            {address} 
                        </Typography>
                    </Paper>
                    <Paper className={classes.root} >
                        <Typography variant="h5" component="h3">
                           api-key:
                        </Typography>

                        <Typography  type="body1" >
                            {auth.toString()}
                        </Typography>
                    </Paper>
                 
                   
                    
                    {/* {auth.toString()} */}
                </div>
            </MaLayout>
        );
    }
}

UserinfoPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserinfoPage);



// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';


// function PaperSheet(props) {
//   const { classes } = props;

//   return (
//     <div>
//       <Paper className={classes.root} elevation={1}>
//         <Typography variant="h5" component="h3">
//           This is a sheet of paper.
//         </Typography>
//         <Typography component="p">
//           Paper can be used to build surface or other elements for your application.
//         </Typography>
//       </Paper>
//     </div>
//   );
// }

// PaperSheet.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(PaperSheet);
