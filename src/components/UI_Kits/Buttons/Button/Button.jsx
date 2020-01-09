import React from "react";
import injectSheet from 'react-jss'
import {H3} from "../../../../Fonts";

const classes = {
  button: {
    width: 99,
    height: 44,
    background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    borderRadius: 22,
    ...H3,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline:'none',
    border:'none',
    opacity: props => props.isActive === true? 1: 0.5
  }
};

const Button = ({text = 'Click me',classes, ...rest}) => {

  return (
    <button className={classes.button}>
      {text}
    </button>)
};

export default injectSheet(classes)(Button);