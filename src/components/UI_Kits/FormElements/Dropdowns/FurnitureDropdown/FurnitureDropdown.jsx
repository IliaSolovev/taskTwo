import React, {useState, useEffect} from "react";
import injectSheet from 'react-jss';
import DropdownFiled from "../DropdownFiled/DropdownFiled";
import DropdownCounter from "../DropdownCounter/DropdownCounter";
import {CSSTransition} from "react-transition-group";
import './FurnitureDropdown.css'
import {declOFNum} from "../ParseWord";
import {H3} from "../../../ColorsAndTypes/Fonts";
import {DarkShade25, DarkShade5, DarkShade50, Purple} from "../../../ColorsAndTypes/Colors";

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


const FurnitureDropdown = ({classes, ...rest}) => {
  const titles = ['спальня', 'кровать', 'ванная комната'];
  const wordsArr = [
    ['спальня', 'спальни', 'спален'],
    ['кровать', 'кровати', 'кроватей'],
    ['ванная комната', 'ванные комнаты', 'ванных комнат'],
  ];
  const [text, setText] = useState(declOFNum(0, wordsArr[0]));
  const [values, setValuesState] = useState({0: 0, 1: 0, 2: 0});
  const [isOpen, setUsOpen] = useState(false);

  const setValues = (id, value) => {
    setValuesState({...values, [id]: value});
  };

  const setNewData = () => {
    let res = wordsArr.map((words, index) => {
      return `${ values[index] } ${ declOFNum(values[index], words) }`;
    });
    setText(res.join(', '));
  };

  useEffect(() => {setNewData()},[setNewData, values]);

  return (
    <div>
      <DropdownFiled text={ text } setUsOpen={ () => setUsOpen(!isOpen) }/>
      <CSSTransition in={ isOpen } timeout={ 200 } classNames='guestsDropdown' unmountOnExit>
        <div className={ classes.content }>
          <div>
            { titles.map((title, id) => <DropdownCounter key={ id } title={ title }
                                                         setValues={ setValues } id={ id }
                                                         value={ values[id] }/>) }
          </div>
        </div>
      </CSSTransition>

    </div>)
};

export default injectSheet(classes)(FurnitureDropdown);

