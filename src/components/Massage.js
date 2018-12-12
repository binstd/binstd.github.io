import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
 
    constructor(props) {
        super(props);
    }

//   handleClick = () => {
//     this.setState({ open: true });
//   };

//   handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     this.setState({ open: false });
//   };
  
  componentWillMount(){
    console.log('this.props:::',this.props);
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div>
        {/* <Button onClick={this.handleClick}>Open simple snackbar</Button> */}
        
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.props.messageIsOpen}
          autoHideDuration={6000}
          onClose={() => this.props.setMessage(false)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.messageText}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={() => this.props.setMessage(false)}>
              已读
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
            //   onClick={this.handleClose}
              onClick={() => this.props.setMessage(false)}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />

      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
