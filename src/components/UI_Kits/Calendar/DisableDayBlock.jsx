import React from "react";
import injectSheet from 'react-jss';
import {DarkShade25, DarkShade50, Purple} from "../../../Colors";
import {H3} from "../../../Fonts";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    background: '',
    borderRadius: 22,
    ...H3,
    color: DarkShade25,
    cursor: 'pointer'
  }
};

const DisableDayBlock = ({classes, day, ...rest}) => {
  return <div className={classes.root}>{ day }</div>
};

export default injectSheet(classes)(DisableDayBlock);