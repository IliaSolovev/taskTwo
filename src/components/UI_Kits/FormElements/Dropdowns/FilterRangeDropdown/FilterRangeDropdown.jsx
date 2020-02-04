import React, {useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../../ColorsAndTypes/Colors";
import {Body} from "../../../ColorsAndTypes/Fonts";
import expand_more from './image/expand_more.png'
import {CSSTransition} from "react-transition-group";
import './FilterRangeDropdown.css'
import RangeCalendar from "../../../Cards/RangeCalendar/RangeCalendar";

const classes = {
  field: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
    width: 266,
    height: 44,
    background: '#fff',
    border: `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 4,
    ...Body,
  },
  image: {
    cursor: 'pointer',
  }

};

const FilterRangeDropdown = ({classes, defaultText = 'Выберите дату', ...rest}) => {
  const months = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек',];

  let [isOpenCalendar, setIsOpenCalendar] = useState(false);

  let [text, setText] = useState(defaultText);

  const onSubmit = (day, month) => {
    setText(`${ day[0] } ${ months[month] } - ${ day[1] } ${ months[month] }`)
  };
  return (
    <>
      <div className={ classes.field }>
        <div>{ text }</div>
        <div><img src={ expand_more } alt="" className={ classes.image }
                  onClick={ () => setIsOpenCalendar(!isOpenCalendar) }/></div>
      </div>
      <CSSTransition in={ isOpenCalendar } timeout={ 200 } unmountOnExit classNames='filterRangeDropdown'>
        <div className={ classes.calendar }>
          <RangeCalendar onSubmit={ onSubmit } onClear={ () => setText('Выберите дату') }
                         setIsOpen={ () => setIsOpenCalendar(!isOpenCalendar) }/>
        </div>
      </CSSTransition>
    </>)
};

export default injectSheet(classes)(FilterRangeDropdown)