import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from './/LayoutBody';
import Typography from './/Typography';
import productValues1 from './img/productValues1.svg';
import productValues2 from './img/productValues2.svg';
import productValues3 from './img/productValues3.svg';
const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.light,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 2}px`,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                    自主掌控身份授权
              </Typography>
              <Typography variant="subtitle1">
                {'IMbit将个人身份归还给个人掌控，以区块链技术为核心，用户自己管理隐私数字，只授权自己想授权。'}
                {'迎接Web3.0,支持身份登陆授权,认证，数据授权，批准交易等自主控制功能。'}
              </Typography>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues2}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                New experiences
              </Typography>
              <Typography variant="subtitle1">
                {'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
                {'your Sundays will not be alike.'}
              </Typography>
            </div>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues3}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                扫码&深度链接
              </Typography>
              <Typography variant="subtitle1">
                {'通过扫二维码，使用walletconnect协议,将pc上的Dapps连接到移动imbit客户端,不同app之间支持深度链接跳转app确认授权。'}
                {'用户可以与任何Dapp交互而不包括其私钥，所有授权都通过手机确认。'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
