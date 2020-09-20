import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { IContentItem } from '../../data/contentItems';
import useStyles from './styles';

const ContentItem: React.FC<IContentItem> = ({imageSource, title, content}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item>
        <img src={`${process.env.PUBLIC_URL}/assets/${imageSource}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3">{title}</Typography>
        <Typography>{content}</Typography>
      </Grid>
    </Grid>
  );
};

export default ContentItem;