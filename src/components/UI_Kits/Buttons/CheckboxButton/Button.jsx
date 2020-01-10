import React, {useState} from "react";
import injectSheet from 'react-jss'
import {Body} from "../../../../Fonts";
import {DarkShade50, Purple} from "../../../../Colors";
import vector from './images/Vector.svg'

const classes = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 222,
    height: 18,
    cursor: 'pointer',
    margin: ' 0 0 10px 0',
  },
  input: {
    display: "none",
  },
  rectangle: {
    width: 20,
    height: 20,
    borderRadius: 4,
    border: props => props.isCheck === true ? `1px solid ${ Purple }` : `1px solid ${ DarkShade50 }`,
    boxSizing: 'border-box',
  },
  check: {
    margin: '0 0 4px 4px'
  },
  text: {
    width: 192,
    height: 36,
    marginTop: 2,
    ...Body,
    color: DarkShade50,
  }
};

const StyledButton = injectSheet(classes)(({text, setIsCheck, isCheck,classes, ...rest}) => (
  <div className={ classes.container } onClick={ setIsCheck }>
    <input type='checkbox' name='checkbox' value={ text } className={ classes.input }/>
    <div className={ classes.rectangle } >
      {isCheck && <img src={ vector } alt="" className={ classes.check }/> }
    </div>
    <div className={ classes.text }>{ text }</div>
  </div>));

const Button = ({text, classes, ...rest}) => {
  const [isCheck, setIsCheck] = useState(false);

  return <StyledButton text={ text } isCheck={ isCheck }
                       setIsCheck={ () => setIsCheck(!isCheck) }/>;
};

export default Button;