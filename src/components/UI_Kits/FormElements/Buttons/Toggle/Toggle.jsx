import React, {useState} from "react";
import injectSheet from 'react-jss'
import {Body} from "../../../ColorsAndTypes/Fonts";
import {DarkShade25, Purple} from "../../../ColorsAndTypes/Colors";


const classesToggler = {
  toggleContainer: {
    width: 40,
    height: 20,
    background: `#FFFFFF`,
    border: props => props.isActive ? `1px solid ${ Purple }` : `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 10,
    cursor: 'pointer'
  },
  toggleCircle: {
    width: 12,
    height: 12,
    margin: props => props.isActive ?'3px 0 0 24px' : '3px 0 0 3px',
    background: props => props.isActive ?
      `linear-gradient(180deg, ${ Purple } 0%, #8BA4F9 100%)`:
      `linear-gradient(180deg, ${ DarkShade25 } 0%, #8BA4F9 100%)`,
    borderRadius: 10,
  },

};

const classesToggle = {
  text: {
    width: 210,
    verticalAlign: 'middle',
    ...Body,
  }
}

const Toggler = ({classes, click, ...rest}) => {
  return (
    <div className={ classes.toggleContainer } onClick={ click }>
      <div className={ classes.toggleCircle }/>
    </div>
  )
};
const StyledToggler = injectSheet(classesToggler)(Toggler);

const Toggle = ({classes, ...rest}) => {
  const [isActive, setIsActive] = useState(false);

  const listener = () => {
    setIsActive(!isActive);
  };
  return (
    <div style={ {width: 260, height: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center'} }>
      <StyledToggler classes={ classes } isActive={ isActive } click={ listener }/>
      <span>Получать спецпредложения</span>
    </div>)
};




export default injectSheet(classesToggle)(Toggle);