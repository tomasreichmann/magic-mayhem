import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import withRoot from '../src/withRoot';

import Navigation from '../src/components/Navigation';
import { pageStyles } from '../src/utils/styles';

const styles = theme => ({
  ...pageStyles(theme)
});

class Campaign extends React.Component {
  static async getInitialProps ({ query, res }) {
    const campaign = {
      key: query.campaignKey
    };

    if (!campaign && res) {
      res.statusCode = 404
    }

    return { campaign }
  }

  render() {
    const { classes, campaign } = this.props;
    const { key } = campaign;

    return (
      <div className={classes.root}>
        <Navigation />
        <div className={classes.page} >
          <Typography variant="display2" >Campaign {key}</Typography>
          {/* <Typography variant="subheading" gutterBottom className={classes.lead}>{description}</Typography> */}
        </div>
      </div>
    );
  }
}

Campaign.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Campaign));
