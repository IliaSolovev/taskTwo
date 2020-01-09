import React from "react";
import injectSheet from 'react-jss'
import {H3} from "../../../../Fonts";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Purple, Purple50} from "../../../../Colors";

const classes = {
  button: {
    position: 'relative',
    width: 320,
    height: 44,
    background: `linear-gradient(180deg, ${ Purple } 0%, #8BA4F9 100%)`,
    borderRadius: 22,
    ...H3,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
  },
  arrow: {
    position: 'absolute',
    bottom: 10,
    right: 15
  }
};

const PayButton = ({classes, text = 'Перейти к оплате', ...rest}) => {
  return (
    <button className={ classes.button }>
      <div>{ text }</div>
      <ArrowForwardIcon className={ classes.arrow }/>
    </button>)
};

export default injectSheet(classes)(PayButton)