import React, {useState} from "react";
import injectSheet from 'react-jss';
import DropdownFiled from "../DropdownFiled/DropdownFiled";
import DropdownCounter from "../DropdownCounter/DropdownCounter";
import {DarkShade25, DarkShade5, DarkShade50, Purple} from "../../../../Colors";
import {CSSTransition} from "react-transition-group";
import './GuestsDropdown.css'
import {declOFNum} from "../ParseWord";
import {H3} from "../../../../Fonts";

const classes = {
  content: {
    width: 320,
    border: `1px solid ${ DarkShade25 }`,
    boxSizing: `border-box`,
    boxShadow: `0px 10px 20px ${ DarkShade5 }`,
    overflow: 'hidden',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
    margin: '13px 0',
    ...H3
  },
  confirm: {
    color: Purple,
    cursor: 'pointer',
  },
  clear: {
    color: DarkShade50,
    cursor: 'pointer',

  }
};


const GuestsDropdown = ({classes, ...rest}) => {
  const titles = ['Взрослые', 'Дети', 'Младенцы'];
  const wordsArr = ['гость', 'гостя', 'гостей'];
  const [data, setData] = useState(0);
  const [text, setText] = useState(declOFNum(data, wordsArr));
  const [values, setValuesState] = useState({0: 0, 1: 0, 2: 0});
  const [isOpen, setUsOpen] = useState(false);

  const setValues = (id, value) => {
    setValuesState({...values, [id]: value});
  };

  const setNewData = () => {
    console.log(values);
    setData(values[0] + values[1] + values[2]);
    setText(declOFNum(values[0] + values[1] + values[2], wordsArr))
  };

  return (
    <div>
      <DropdownFiled text={ data ? `${ data } ${ text }` : 'Сколько гостей' } setUsOpen={ () => setUsOpen(!isOpen) }/>
      <CSSTransition in={ isOpen } timeout={ 1000 } classNames='guestsDropdown' unmountOnExit>
        <div className={ classes.content }>
          <div>
            { titles.map((title, id) => <DropdownCounter key={ id } title={ title }
                                                         setValues={ setValues } id={ id }
                                                         value={ values[id] }/>) }
          </div>
          <div className={ classes.buttons }>
            <div className={ classes.clear } onClick={ () => setData(0) }>Очистить</div>
            <div className={ classes.confirm } onClick={ setNewData }>Применить</div>
          </div>
        </div>
      </CSSTransition>

    </div>)
};

export default injectSheet(classes)(GuestsDropdown);

