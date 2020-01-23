import React, {useEffect, useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../../ColorsAndTypes/Colors";
import {Body, H3} from "../../../ColorsAndTypes/Fonts";
import Button from "./Button";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    height: 38,
    margin: '0 auto',
  },
  title: {
    ...H3
  },
  buttons: {
    width: 96,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    ...H3
  }

};

const DropdownCounter = ({classes, title = 'спальни', id, setValues, ...rest}) => {
  const [value, setValue] = useState(rest.value);
  const calcValue = (symbol) => {
    if (symbol === '+') {
      setValue(value + 1);
      setValues(id, value + 1);
    }
    else {
      if (value - 1 >= 0) setValue(value - 1);
      setValues(id, value - 1);
    }
  };
  useEffect(() => {
    setValue(rest.value);
  },[rest.value]);
  return (
    <div className={ classes.root }>
      <div className={ classes.title }>{ title }</div>
      <div className={ classes.buttons }>
        <Button symbol='-' operation={ calcValue }/>
        <div className={ classes.value }> { value }</div>
        <Button symbol='+' operation={ calcValue }/>
      </div>
    </div>
  )
};

export default injectSheet(classes)(DropdownCounter);