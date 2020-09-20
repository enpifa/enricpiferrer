import React from 'react';
import { Grid } from '@material-ui/core';

import ContentItem from './ContentItem';
import contentItems from '../../data/contentItems';
import useStyles from './styles';

const Content = () => {
  const classes = useStyles();

  return (
    <>
      {contentItems.map(item => <ContentItem imageSource={item.imageSource} title={item.title} content={item.content} />)}
    </>
  );
};

export default Content;