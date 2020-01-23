import React from "react";
import injectSheet from 'react-jss'
import {H3} from "../../../ColorsAndTypes/Fonts";
import {Purple, Purple50} from "../../../ColorsAndTypes/Colors";

const classes = {
  button: {
    width: 99,
    height: 44,
    background: '#FFFFFF',
    borderRadius: 22,
    ...H3,
    color: Purple,
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline:'none',
    border:props => props.isActive === true? `2px solid ${Purple}`: `2px solid ${Purple50}` ,
  }
};

const TransparentButton = ({text = 'Click me',classes,type = '', ...rest}) => {

  return (
    <button type={type} className={classes.button}>
      {text}
    </button>)
};

export default injectSheet(classes)(TransparentButton);