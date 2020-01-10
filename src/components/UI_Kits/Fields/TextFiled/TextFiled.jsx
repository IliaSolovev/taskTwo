import React from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../../../Colors";
import {Body} from "../../../../Fonts";

const classes = {
  input:{
    width:320,
    height:44,
    padding:'0 0 0 15px',
    background: '#FFFFFF',
    border:`1px solid ${DarkShade25}`,
    boxSizing: 'border-box',
    borderRadius: 4,
    ...Body,
  }
};

const TextField = ({placeholder = 'Email',classes,...rest}) => {
  return <input type='text' placeholder={placeholder} className={classes.input}/>
};

export default injectSheet(classes)(TextField);