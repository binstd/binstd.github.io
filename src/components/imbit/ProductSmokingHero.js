import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from '../common/LayoutBody';
import Typography from '../common/Typography';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 9,
        marginBottom: theme.spacing.unit * 9,
    },
    button: {
        border: '4px solid currentColor',
        borderRadius: 0,
        height: 'auto',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px`,
    },
    link: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    buoy: {
        width: 150,
        height:'100%',
        margin: 'auto 20px',
    },
    // style={{ width: 150 }}
    ourWith: {
        display: 'flex'
    }
});

function ProductSmokingHero(props) {
    const { classes } = props;

    return (
        <LayoutBody className={classes.root} component="section">
            <Button className={classes.button}>
                <Typography variant="h4" component="span">
                    合作伙伴
        </Typography>
            </Button>
            <Typography variant="subtitle1" className={classes.link}>
                我们相信每个人都有权控制自己的数字身份
      </Typography>
            <div className={classes.ourWith}>
                <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/proginn_logo_680x450.png" className={classes.buoy} alt="buoy" />
                <img src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/footer-logo.png" className={classes.buoy} alt="buoy" />
            </div>
        </LayoutBody>
    );
}

ProductSmokingHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
