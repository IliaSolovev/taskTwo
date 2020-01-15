import React from "react";
import injectSheet from 'react-jss';
import {DarkShade50, Green, Purple} from "../../../Colors";
import {H3} from "../../../Fonts";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    background: props => props.currentDay? `linear-gradient(180deg, ${Green} 0%, #66D2EA 100%)`:'',
    borderRadius: 22,
    ...H3,
    color:props => props.currentDay? '#fff': DarkShade50,
    cursor: 'pointer'
  }
};

const DayBlock = ({classes, day, ...rest}) => {
  return <div className={classes.root}>{ day }</div>
};

export default injectSheet(classes)(DayBlock);