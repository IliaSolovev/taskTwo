import React, {useState} from "react";
import injectSheet from 'react-jss'
import Button from "./Button";

const classes = {};


const RadioButton = ({names, classes, ...rest}) => {

  const [choice, setChoice] = useState(true);

  const listener = () => {
    console.log(choice);
    setChoice(!choice)
  };

  return (
    <div style={ {display: 'flex', justifyContent: 'space-between', width: 216} }>
      <Button text='Мужчина' click={ choice === true? ()=>{} :listener} isActive={ choice }/>
      <Button text='Женщина' click={ choice === false? ()=>{} :listener} isActive={ !choice }/>
    </div>)
};

export default RadioButton;