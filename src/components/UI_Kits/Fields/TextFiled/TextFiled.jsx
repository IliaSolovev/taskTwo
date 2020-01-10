import React, {useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade25, DarkShade50} from "../../../../Colors";
import {Body} from "../../../../Fonts";

const classes = {
  input: {
    width: 320,
    height: 44,
    padding: '0 0 0 15px',
    background: '#FFFFFF',
    border: props => props.isActive ? `1px solid ${ DarkShade50 }` : `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 4,
    outline: 'none',
    ...Body,
    color: props => props.isActive ? DarkShade50 : DarkShade25,
  }
};

const TextField = ({placeholder = 'Email', ...rest}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);
  const mouseOver = (state) => {
    if (isFocus) {
      if (state) setIsFocus(state)
    } else setMouseOver(state);
  };

  const focus = (state) => {
    setIsFocus(state);
  };

  return <StylesFiled mouseOver={ mouseOver } focus={ focus }
                      isActive={ isFocus || isMouseOver } placeholder={ placeholder }/>
};

const StylesFiled = injectSheet(classes)(({classes, placeholder, mouseOver, focus, ...rest}) => {

  return <input type='text' placeholder={ placeholder } className={ classes.input }
                onMouseOver={ () => mouseOver(true) } onMouseLeave={ () => mouseOver(false) }
                onFocus={ () => focus(true) } onBlur={ () => focus(true) }/>
});

export default TextField;