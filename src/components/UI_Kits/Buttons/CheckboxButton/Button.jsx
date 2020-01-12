import React, {useState} from "react";
import injectSheet from 'react-jss'
import {Body, H3} from "../../../../Fonts";
import {DarkShade50, DarkShade75, Purple} from "../../../../Colors";
import vector from './images/Vector.svg'
import {CSSTransition} from 'react-transition-group';
import './checkbox.css'

const classes = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: props => props.title ? 266 : 222,
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
    zIndex:-1
  },
  check: {
    margin: '0 0 4px 4px',
  },
  textContainer: {
    width: props => props.title ? 236 : 192,
    height: props => props.title ? 52 : 18,
    maxHeight: 60,
    marginTop: 2,
  },
  text: {

    ...H3,
    color: DarkShade50,
  },
  title: {
    ...Body,
    fontWeight: 'bold',
    color: DarkShade75
  }
};

const StyledButton = injectSheet(classes)(({text, title = false, setIsCheck, isCheck, classes,id, ...rest}) => (
  <div className={ classes.container } onClick={ setIsCheck }>
    <input id={id} type='checkbox' name='checkbox' value={ text } className={ classes.input }/>
    <label htmlFor={id} className={ classes.rectangle }>
      <CSSTransition in={ isCheck } timeout={ 200 } classNames="my-node" unmountOnExit>
        <img src={ vector } alt="" className={ classes.check }/>
      </CSSTransition>
    </label>
    <div className={ classes.textContainer }>
      <div className={ classes.title }>{ title }</div>
      <div className={ classes.text }>{ text }</div>
    </div>

  </div>));

const Button = ({text, title = '', classes,id, ...rest}) => {
  const [isCheck, setIsCheck] = useState(false);
  return <StyledButton text={ text } isCheck={ isCheck } title={ title }
                       setIsCheck={ () => setIsCheck(!isCheck) } id={id}/>;
};

export default Button;