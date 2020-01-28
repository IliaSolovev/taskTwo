import React from "react";
import injectSheet from 'react-jss';
import Button from "../FormElements/Buttons/Button/Button";
import TransparentButton from "../FormElements/Buttons/TransparentButton/TransparentButton";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 220,
  }
};

const LoginOrRegistration = ({classes,...rest}) => {
  return (
    <div className={classes.root}>
      <TransparentButton isActive={true} text='Login'/>
      <Button isActive={true} text='Register'/>
    </div>
  )
};

export default injectSheet(classes)(LoginOrRegistration)