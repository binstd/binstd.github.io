import React from 'react';
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
      padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 10}px ${theme.spacing.unit * 3}px`,
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

function AddressForm(props) {

  const { classes } = props;

  return (
    // <React.Fragment>
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        合约部署
      </Typography>
      <Grid container spacing={24}>

        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="fromAddress"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="addiress2"
            name="addiress2"
            label="toAddress"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>

      </Grid>

      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           确认
      </Button>
    </Paper>
    // </React.Fragment>
  );
}


AddressForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);
