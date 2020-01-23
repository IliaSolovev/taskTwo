import React from "react";
import injectSheet from 'react-jss';
import {DarkShade25, DarkShade50, Purple} from "../../ColorsAndTypes/Colors";
import {H3} from "../../ColorsAndTypes/Fonts";

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

const DisableDayBlock = ({classes, date, ...rest}) => {
  return <div className={classes.root}>{ date[0] }</div>
};

export default injectSheet(classes)(DisableDayBlock);