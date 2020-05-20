import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    '@media print': {
      display: 'none'
    },
  },
  separator: {
    flex: '1 1 20px',
  },
  buttonGutter: {
    marginLeft: theme.spacing.unit * 2,
  },
});

function Navigation(props) {
  const { classes, user } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" passHref><Button component="a" variant="" className={classes.logo}>
            <Typography variant="title" component="span" color="primary" >Campaign tools</Typography>
          </Button></Link>
          <Link href="/adventures" ><Button component="a" className={classes.button}>Adventures</Button></Link>
          <div className={classes.separator} />
          {
            user
            ? [
                <Link href="/campaigns" key="campaigns" ><Button component="a" className={classes.button}>My Campaigns</Button></Link>,
                <Link href="/my-adventures" key="my-adventures" ><Button component="a" className={classes.button}>My Adventures</Button></Link>,
                <Link href="/profile" key="profile" >
                  <Button variant="contained" component="a">
                    <AccountCircle />&ensp;
                    {user.name}
                  </Button>
                </Link>,
                <Link href="/sign-out" key="sign-out" ><Button component="a" color="secondary" className={classes.button}>Sign out</Button></Link>
              ]
              : [
                <Link href="/sign-in" key="sign-in" ><Button component="a" variant="outlined" color="secondary" className={classes.buttonGutter}>Sign in</Button></Link>,
                <Link href="/sign-up" key="sign-up" ><Button component="a" variant="outlined" color="secondary" className={classes.buttonGutter}>Sign up</Button></Link>
              ]
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
Navigation.defaultProps = {
  user: {
    name: 'User name'
  },
};

export default withStyles(styles)(Navigation);