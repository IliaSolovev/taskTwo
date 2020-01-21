import React from "react";
import injectSheet from 'react-jss'
import {H3} from "../../../../Fonts";
import {DarkShade25, DarkShade50, Purple, Purple50} from "../../../../Colors";

const classes = {
  button: {
    width: 99,
    height: 44,
    background: '#FFFFFF',
    borderRadius: 22,
    ...H3,
    color: props => props.isActive === true ? Purple : DarkShade50,
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',

  }
};

const TransparentButtonWithoutBorder = ({text = 'Click me', classes, listener,...rest}) => {

  return (
    <button className={classes.button} onClick={listener}>
      {text}
    </button>)
};

export default injectSheet(classes)(TransparentButtonWithoutBorder);