import React from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../../ColorsAndTypes/Colors";
import {Body} from "../../../ColorsAndTypes/Fonts";
import plus from './images/+.svg';
import minus from './images/-.svg';

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    border: `1px solid ${DarkShade25}`,
    boxSizing: 'border-box',
    borderRadius:22,
    cursor: 'pointer'
  },
};

const Button = ({classes, symbol = '+', operation, ...rest}) => {
  return (
    <div className={ classes.root } onClick={() => operation(symbol)}>
      <img src={ symbol === '+' ? plus : minus } alt=""/>
    </div>
  )
};

export default injectSheet(classes)(Button);