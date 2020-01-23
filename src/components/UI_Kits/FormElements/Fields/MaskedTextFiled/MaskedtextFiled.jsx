import React, {useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade100, DarkShade25, DarkShade50, DarkShade75} from "../../../ColorsAndTypes/Colors";
import {Body} from "../../../ColorsAndTypes/Fonts";

const classes = {
  input: {
    width: 320,
    height: 44,
    padding: '0 0 0 15px',
    background: '#FFFFFF',
    border: `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 4,
    outline: 'none',
    ...Body,
    color: DarkShade75,
    '&::placeholder': {
      color: DarkShade25
    }
  }

};

const MaskedTextFiled = ({classes, ...rest}) => {

  return <StyledMaskedTextFiled />
};

const StyledMaskedTextFiled = injectSheet(classes)(({classes, ...rest}) => {
  return <input className={ classes.input }
                type="date" />
});

export default injectSheet(classes)(MaskedTextFiled);