import React from "react";
import injectSheet from 'react-jss'
import {Body} from "../../../../Fonts";
import {DarkShade50, Purple} from "../../../../Colors";

const classes = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 98,
    height: 24,
    cursor: 'pointer'

  },
  input: {
    display: "none",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    border: props => props.isActive === true ? `1px solid ${ Purple }` : `1px solid ${ DarkShade50 }`,
    boxSizing: 'border-box',
  },
  miniCircle: {
    width: 12,
    height: 12,
    background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    borderRadius: 10,
    margin: '3px 3px'
  },
  text: {
    width: 68,
    height: 24,
    marginTop: 2,
    ...Body,
    color: props => props.isActive === true ? Purple : DarkShade50,
  }
};


const Button = ({text, classes, isActive, click, ...rest}) => {
  return (
    <div className={ classes.container } onClick={click}>
      <input type='radio' name='radio' value='Мужчина' className={ classes.input }/>
      <div className={ classes.circle }>
        { isActive && <div className={ classes.miniCircle }/> }
      </div>
      <div className={ classes.text }>{ text }</div>
    </div>)
};

export default injectSheet(classes)(Button);