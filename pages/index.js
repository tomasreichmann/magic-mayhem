import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  Avatar,
  ListItemText,
  Button
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

import withRoot from '../src/withRoot';

import Navigation from '../src/components/Navigation';
import { pageStyles } from '../src/utils/styles';
import Carousel from '../src/components/Carousel';

const styles = theme => ({
  ...pageStyles(theme),
  lead: {
    marginTop: theme.spacing.unit * 2,
  },
  heading: {
    marginTop: theme.spacing.unit * 2,
  },
  featured: {
  },
  featuredLink: {
    margin: `0 ${theme.spacing.unit * -2}px`,
  },
  featuredItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: 400,
  },
  featuredImage: {
    flex: '1 1 auto',
  },
  featuredContent: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  sectionTitle: {
    marginBottom: theme.spacing.unit * 2,
  },
  inline: {
    display: 'inline'
  },
  adventureImage: {
    height: 200
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    const newAdventures = [
      {
        key: 'New Adventure',
        title: 'New Adventure',
        author: {
          name: 'Author name'
        },
        image: 'https://i.imgur.com/OnK50jP.jpg'
      }
    ]

    return (
      <div className={classes.root}>
        <Navigation />
        <Carousel>
          <Grid container className={classes.featured} alignItems="flex-end" >
            <Grid item xs={12}>
              <Card className={classes.featuredItem}>
                <CardMedia
                  image="https://i.imgur.com/gYpimso.jpg"
                  title="Featured adventure"
                  className={classes.featuredImage}
                />
                <CardContent className={classes.featuredContent}>
                  <Link href="/adventure/0" passHref><Button color="secondary" component="a" className={classes.featuredLink}><Typography variant="display2" component="span" >Featured adventure</Typography></Button></Link>
                  <Typography variant="title" >Short description</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Carousel>
        <Grid container spacing={24} className={classes.page} >
          <Grid item xs={12} sm={6}>
            <Typography variant="title" gutterBottom className={classes.sectionTitle}>Latest Adventures</Typography>
            <Grid container spacing={24} >
              {newAdventures.map(adventure => (
                <Grid item xs={12} >
                  <Card key={adventure.key}>
                    <CardMedia
                      image={adventure.image}
                      title={adventure.title}
                      className={classes.adventureImage}
                    />
                    <CardContent>
                      <div><Link href="/adventure/0" passHref><Typography variant="title" component="a" >{adventure.title}</Typography></Link></div>
                      <Typography variant="subheading" >by: <Link href={`/author/${adventure.author.key}`} passHref>
                        <Typography variant="subheading" component="a" className={classes.inline} >{adventure.author.name}</Typography>
                      </Link></Typography>

                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="title" gutterBottom className={classes.sectionTitle}>Latest Updates</Typography>
            <List>
              <ListItem>
                <Avatar><ImageIcon /></Avatar>
                <ListItemText
                  primary={
                    <Link href="/adventure/0" passHref><Typography variant="subheading" component="a" >New Recap for session #1 added</Typography></Link>
                  }
                  secondary="My Campaign - Jan 9, 2018 12:00"
                />
              </ListItem>
              <ListItem>
                <Avatar><ImageIcon /></Avatar>
                <ListItemText
                  primary={
                    <Link href="/adventure/0" passHref><Typography variant="subheading" component="a" >New Recap for session #1 added</Typography></Link>
                  }
                  secondary="My Campaign - Jan 9, 2018 12:00"
                />
              </ListItem>
              <ListItem>
                <Avatar><ImageIcon /></Avatar>
                <ListItemText
                  primary={
                    <Link href="/adventure/0" passHref><Typography variant="subheading" component="a" >New Recap for session #1 added</Typography></Link>
                  }
                  secondary="My Campaign - Jan 9, 2018 12:00"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
