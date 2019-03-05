import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../common/LayoutBody';
import Button from '../common/Button';
import Typography from '../common/Typography';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import CloudIcon from '@material-ui/icons/Cloud';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 2}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 8,
    color:'#ffffff'
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: '#000000',
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing.unit * 8,
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4"  className={classes.title} component="h2">
          我们提供
        </Typography>
        <div>
          <Grid container spacing={16}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>API数据云</div>
                {/* <img
                  src="/static/themes/onepirate/productHowItWorks1.svg"
                  alt="suitcase"
                  className={classes.image}
                /> */}
                <CloudQueueIcon
                    className={classes.image}
                    fontSize={'large'}
                />
                 
                {/* <Typography variant="h5" align="center" >
                  Appointment every Wednesday 9am.
                </Typography> */}
                <Typography variant="subtitle1">
                {'企业和程序员可以通过BinSTD封装的api或SDK零成本几行代码接入其他数据资源，同时BinSTD提供可选数据交易、数据分析服务给用户。'}
                {/* {'用户通过BinSTD数据服务，不仅开发成本极大降低。而且可以获得丰富的服务：数据交易服务，数据分析服务，区块链管理服务等。'} */}
              </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>数据源</div>
                <InsertChartOutlinedIcon
                    className={classes.image}
                    fontSize={'large'}
                />

   
                 <Typography variant="subtitle1">
                {'通过应用、程序（框架/库）的开发建设关键行业的数据（云数据API）的公用服务资源，实现开发能力和数据能力的组件化、插件化、云端化。'}
                {'促进数据流通和特定数据区块链化。'}
              </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>ImBit数字身份</div>
                <FingerprintIcon
                    className={classes.image}
                    fontSize={'large'}
                />
                
                 <Typography variant="subtitle1">
                    {'我们与程序员客栈联合建立ImBit数字身份，促进系统融合，加快促进互联网技术用户往区块链用户转变。'}
              </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/premium-themes/onepirate/sign-up" variant="button" />
          )}
        >
          开始
        </Button> */}
      </LayoutBody>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
