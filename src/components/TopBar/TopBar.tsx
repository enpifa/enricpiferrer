import React from 'react';
import useStyles from './styles';

const TopBar = () => {
  const classes = useStyles();
  const topBarItems = ['Life', 'Projects', 'Suggestions', 'Travel Blog'];

  return (
    <ul className={classes.topBar}>
      {topBarItems.map(item => <li className={classes.topBarItem}>{item}</li>)}
    </ul>
  );
};

export default TopBar;