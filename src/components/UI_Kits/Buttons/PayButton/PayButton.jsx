import React from "react";
import injectSheet from 'react-jss'
import {H3} from "../../../../Fonts";
import {Purple, Purple50} from "../../../../Colors";

const classes = {
  button: {
    width: 320,
    height: 44,
    background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    borderRadius: 22,
    ...H3,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline:'none',
    border:'none',
  }
};

const PayButton = ({classes, text = 'Перейти к оплате', ...rest}) => {
  return (
    <button className={ classes.button }>
      { text }
    </button>)
};

export default injectSheet(classes)(PayButton)