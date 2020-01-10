import React from "react";
import Button from "./Button";
import injectSheet from 'react-jss'

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: props => props.width,
    height: props => props.height,
  }
};

const CheckboxButton = ({values, width = 222, height = 101, classes, ...rest}) => {

  const buttons = values.map((value, id) => {
    return <Button text={ value } key={ id }/>
  });
  return (
    <div className={ classes.root }>
      { buttons }
    </div>)
};

export default injectSheet(classes)(CheckboxButton);