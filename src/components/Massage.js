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

// class SimpleSnackbar extends React.Component {
 
//     constructor(props) {
//         super(props);
//     }
//     render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <Snackbar
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'center',
//           }}
//           open={this.props.messageIsOpen}
//           autoHideDuration={6000}
//           onClose={() => this.props.setMessage(false)}
//           ContentProps={{
//             'aria-describedby': 'message-id',
//           }}
//           message={<span id="message-id">{this.props.messageText}</span>}
//           action={[
//             <Button key="undo" color="secondary" size="small" onClick={() => this.props.setMessage(false)}>
//               已读
//             </Button>,
//             <IconButton
//               key="close"
//               aria-label="Close"
//               color="inherit"
//               className={classes.close}
//             //   onClick={this.handleClose}
//               onClick={() => this.props.setMessage(false)}
//             >
//               <CloseIcon />
//             </IconButton>,
//           ]}
//         />
//       </div>
//     );
//   }
// }

// SimpleSnackbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleSnackbar);


function MediaControlCard(props) {
  const { classes, setMessage, messageText, messageIsOpen } = props;

  return (
    <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={messageIsOpen}
          autoHideDuration={6000}
          onClose={() => setMessage(false)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{messageText}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={() =>  setMessage(false)}>
              已读
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={() => setMessage(false)}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaControlCard);
