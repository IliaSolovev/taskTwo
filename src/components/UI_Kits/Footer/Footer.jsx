import React from "react";
import injectSheet from 'react-jss';
import Logo from '../images/Logo.png';
import Links from "../Links/Links";
import {Body} from "../ColorsAndTypes/Fonts";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    '&>div':{
      marginBottom: 20
    }
  },
  text: {
    width: 560,
    ...Body,
  }
};

const Footer = ({classes, ...rest}) => {
  return (
    <div className={classes.root}>
      <div><img src={Logo} alt=""/></div>
      <div className={classes.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam
        pellentesque aliquam curabitur cociis.
      </div>
      <Links/>
    </div>
  )
};

export default injectSheet(classes)(Footer);
