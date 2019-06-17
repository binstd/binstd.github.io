import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from './common/LayoutBody';
import Typography from './common/Typography';
import TextField from './common/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#000000',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginRight: theme.spacing.unit,
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150,
  },
  footerIcon:{
    width:'50px'
  }
});

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={16}
            >
              <Grid item className={classes.icons}>
                <a href="https://material-ui.com/" className={classes.icon}>
                    <img 
                        src="https://filescdn.proginn.com/community/10001/20180814/69sDk199wJ.png" 
                        alt="binstd" 
                        className={classes.footerIcon}
                    />
                </a>
              </Grid>
              <Grid item style={{color:'#ffffff '}} > </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom style={{color:'#ffffff '}}>
              链接
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link 
                    href="https://github.com/binstd"
                    style={{color:'#ffffff '}}
                >
                    github
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link 
                    href="/about"
                    style={{color:'#ffffff '}}
                >
                    关于我们
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom style={{color:'#ffffff '}}>
                产品
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link 
                    href="/"
                    style={{color:'#ffffff '}}
                >
                    区块链云平台
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link 
                    href="/imbit"
                    style={{color:'#ffffff '}}
                >
                    imbit数字身份
                </Link>
              </li>
            </ul>
          </Grid>
          
          {/* <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom  style={{color:'#ffffff '}} >
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid> */}

          <Grid item>
            <Typography variant="caption" style={{color:'#ffffff '}}>
              {/* {'BinSTD进制   '} */}
              <Link href="www.binstd.com" title="Freepik"style={{color:'#ffffff '}} >
                BinSTD进制 
              </Link>
              {' ©2018 '}
              <Link href="www.binstd.com" title="Flaticon"  style={{color:'#ffffff '}} >
                www.binstd.com
              </Link>
              {' All Rights Reserved.'}
            
            </Typography>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(AppFooter);
