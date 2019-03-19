import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '../common/Button';
import Typography from '../common/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
    'https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/banner.png';

const styles = theme => ({
    background: {
        // backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#ffffff', // Average color of the background image.
        backgroundPosition: 'center',
    },
    backgroundDown: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#ffffff', // Average color of the background image.
        backgroundPosition: 'center',
    },
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing.unit * 5,
        },
    },
    more: {
        marginTop: theme.spacing.unit * 2,
    },
    
});

function ProductHero(props) {
    const { classes } = props;

    return (
        <div style={{marginTop:'60px'}}>
            <ProductHeroLayout backgroundClassName={classes.background}>
                {/* <img style={{ display: 'none' }} src={backgroundImage} alt="" /> */}
                <Typography  align="center" variant="h2" >
                    Imbit
                </Typography>
                <Typography  align="center" variant="h5" className={classes.h5}>
                            Web3.0时代数字身份系统,自主控制授权你的身份数据
                </Typography>

                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component={linkProps => (
                    <Link {...linkProps}  target="_blank" href="https://github.com/binstd/imbit/releases" variant="button" />
                    )}
                >
                    下载
                </Button>

                <Typography variant="body2" color="inherit" className={classes.more}>
                    Discover the experience
                </Typography>

            </ProductHeroLayout>
            <ProductHeroLayout backgroundClassName={classes.backgroundDown}>
                     
                    <img style={{ display: 'none' }} src={backgroundImage} alt="" />
            
            </ProductHeroLayout>
        </div>

    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
