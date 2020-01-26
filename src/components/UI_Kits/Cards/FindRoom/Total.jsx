import React from "react";
import injectSheet from 'react-jss';
import {H2} from "../../ColorsAndTypes/Fonts";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    ...H2,
  },
  total: {
    marginRight: 5,

  },
  hr: {
    height: 1,
    paddingTop: 18,
    borderBottom: '1px dashed rgba(31, 32, 65, 0.25)',
    boxSizing: 'border-box',
  },
  cost: {
    marginLeft: 5
  }
};

const Total = ({classes, cost, ...rest}) => {
  return (
    <div className={classes.root}>
      <div>Итого</div>
      <div style={{padding:'0 5px', flexGrow: 1}}> <div className={classes.hr}/></div>
      <div>{cost}₽</div>
    </div>)
};

export default injectSheet(classes)(Total)