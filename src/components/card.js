import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import { navigate } from "@reach/router";
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 600,
    minHeight:180
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
});


function ComplexGrid(props) {
  const { classes,option } = props;
  console.log(option);
  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
     
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}  onClick={() => navigate(`/dapp/create/${option.contractName}`) } >
              <img className={classes.img} alt="complex" src={option.imgUrl} />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                     {option.title}
                </Typography>
                <Typography gutterBottom >
                    {option.description}
                </Typography>
         
                <Button color="primary" size="small" className={classes.button}   onClick={() => navigate(`/dapp/create/${option.contractName}`) } >
                    部  署
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
 
      </Paper>
     
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);
