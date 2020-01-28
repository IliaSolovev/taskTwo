import React from "react";
import injectSheet from 'react-jss'
import Logo from '../images/Logo.png'
import Navbar from "./Navbar";
import LoginOrRegistration from "./LoginOrRegistration";
import {mediaPadding} from "../../Media";

const classes = {
  ...mediaPadding,
  root:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo:{
    maxWidth: 106,
    flexGrow: 1,
  },
  navBar:{
    flexGrow: 1,
    maxWidth: 527,
    minWidth: 420,
    marginLeft: 30,
  },
  loginOrRegistration:{
  marginLeft: '1.8rem'
  }
};

const Header = ({classes, ...rest}) => {
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <div className={classes.logo}><img src={Logo} alt=""/></div>
        <div className={classes.navBar}><Navbar/></div>
        <div className={classes.loginOrRegistration}><LoginOrRegistration/></div>
      </div>
    </div>
  )
};

export default injectSheet(classes)(Header);