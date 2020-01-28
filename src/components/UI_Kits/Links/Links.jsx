import React from "react";
import injectSheet from 'react-jss';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const classes = {
  root:{
    display: 'flex',
    justifyContent: 'space-between',
    width: 112
  }
};

const Links = ({classes,...rest}) => {
  return (
    <div className={classes.root}>
      <div><img src={twitter} alt=""/></div>
      <div><img src={facebook} alt=""/></div>
      <div><img src={instagram} alt=""/></div>
    </div>
  )
};

export default injectSheet(classes)(Links);
