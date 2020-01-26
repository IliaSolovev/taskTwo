import React from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../../ColorsAndTypes/Colors";
import {Body} from "../../../ColorsAndTypes/Fonts";
import expand_more from './images/expand_more.svg';

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    height: 44,
    padding: '0 15px',
    background: '#fff',
    border: `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 3,
    ...Body,
  },
  image:{
    cursor: 'pointer',
  }
};

const DropdownFiled = ({classes, text = 'Сколько гостей',setUsOpen,...rest}) => {
  return (
    <div className={ classes.root } onClick={setUsOpen}>
      <div>{ text }</div>
      <div onClick={setUsOpen} className={classes.image}><img src={ expand_more } alt="Expand more" /></div>
    </div>
  )
};

export default injectSheet(classes)(DropdownFiled);