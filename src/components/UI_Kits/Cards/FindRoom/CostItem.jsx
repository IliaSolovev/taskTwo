import React from "react";
import injectSheet from 'react-jss';
import {Body} from "../../ColorsAndTypes/Fonts";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 15,
    ...Body
  },
  text: {
    width: 214
  },
  cost: {
    flexShrink: 1,
  },
  icon: {}
};

const CostItem = ({classes, text, cost, ...rest}) => {
  return (
    <div className={classes.root}>
      <div className={classes.text}>{text}</div>
      <div className={classes.cost}>{cost}₽</div>
    </div>)
};

export default injectSheet(classes)(CostItem)