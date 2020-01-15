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

const MaskedTextFiled = ({classes,...rest}) => {
  return <StyledMaskedTextFiled  />
};

const StyledMaskedTextFiled = injectSheet(classes)(({classes, ...rest}) => {
  return <input className={classes.input} type="date"/>
});

export default injectSheet(classes)(MaskedTextFiled);