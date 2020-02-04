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

const CheckboxButtons = ({values=['Можно курить'], width = 222, height = 101, classes,isRich = false, ...rest}) => {
  let buttons;
  if(isRich){
    buttons = values.map((value, id) => {
      return <Button text={ value[1] } title={ value[0] } key={ id } id={id}/>
    });
  } else{
    buttons = values.map((value, id) => {
      return <Button text={ value } key={ id }/>
    });
  }

  return (
    <div className={ classes.root }>
      { buttons }
    </div>)
};

export default injectSheet(classes)(CheckboxButtons);