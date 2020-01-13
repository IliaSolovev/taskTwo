import React from 'react';
import injectSheet from 'react-jss';
import {DarkShade25, DarkShade50} from "../../../../Colors";
import {Body} from "../../../../Fonts";
import arrow_forward from './images/arrow_forward.svg';

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    height: 44,
    padding: '0 0 0 15px',
    background: '#FFFFFF',
    border: props => props.isActive ? `1px solid ${ DarkShade50 }` : `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 4,
  },
  input: {
    border: 'none',
    outline: 'none',
    ...Body,
    color: props => props.isActive ? DarkShade50 : DarkShade25,
  },
  button: {
    width:44,
    height: 44,
    border: 'none',
    outline: 'none',
    background: `url(${arrow_forward}) no-repeat 50% 50%`,
    cursor: 'pointer',
  }
};


const SubscriptionTextField = ({classes, placeholder = 'Email', ...rest}) => {
  return (
    <form className={ classes.root }>
      <input type='email' className={ classes.input } placeholder={ placeholder }/>
      <button type='submit' className={classes.button}/>
    </form>)
};

export default injectSheet(classes)(SubscriptionTextField)
