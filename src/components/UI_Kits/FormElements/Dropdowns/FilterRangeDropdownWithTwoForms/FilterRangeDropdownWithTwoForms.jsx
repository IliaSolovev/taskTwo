import React, {useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../../ColorsAndTypes/Colors";
import {Body} from "../../../ColorsAndTypes/Fonts";
import expand_more from './image/expand_more.png'
import {CSSTransition} from "react-transition-group";
import './FilterRangeDropdownWithTwoForms.css'
import RangeCalendar from "../../../Cards/RangeCalendar/RangeCalendar";

const classes = {
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
    width: 150,
    height: 44,
    background: '#fff',
    border: `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 4,
    ...Body,
  },
  image: {
    cursor: 'pointer',
  },
  fieldsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  }
};

const FilterRangeDropdownWithTwoForms = ({
                                           classes, setDaysCount = () => {
  }, ...rest
                                         }) => {
  const months = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек',];
  let [isOpenCalendar, setIsOpenCalendar] = useState(false);
  let [textFirst, setTextFirst] = useState('ДД.ММ.ГГГГ');
  let [textSecond, setTextSecond] = useState('ДД.ММ.ГГГГ');

  const onSubmit = (date, month) => {
    if (!date[0] || !date[1]) {
      alert('Выерите дату!!!');
      setTextFirst('ДД.ММ.ГГГГ');
      setTextSecond('ДД.ММ.ГГГГ');
      return;
    }
    if (date[0][1] + 1 < 10) {
      setTextFirst(`${ date[0][0] }.0${ date[0][1] + 1 }.${ date[0][2] }`)
    } else {
      setTextFirst(`${ date[0][0] }.${ date[0][1] + 1 }.${ date[0][2] }`)
    }
    if (date[1][1] + 1 < 10) {
      setTextSecond(`${ date[1][0] }.0${ date[1][1] + 1 }.${ date[1][2] }`)
    } else {
      setTextSecond(`${ date[1][0] }.${ date[1][1] + 1 }.${ date[1][2] }`)
    }
    setIsOpenCalendar(false);
    setDaysCount(date[1][0] - date[0][0]);
  };
  const onClear = () => {
    setTextFirst('ДД.ММ.ГГГГ');
    setTextSecond('ДД.ММ.ГГГГ');
    setDaysCount(0);
  };
  return (
    <>
      <div className={ classes.fieldsContainer }>
        <div className={ classes.field }>
          <div>{ textFirst }</div>
          <div onClick={ () => setIsOpenCalendar(!isOpenCalendar) }>
            <img src={ expand_more } alt="" className={ classes.image }/>
          </div>
        </div>
        <div className={ classes.field }>
          <div>{ textSecond }</div>
          <div onClick={ () => setIsOpenCalendar(!isOpenCalendar) }>
            <img src={ expand_more } alt="" className={ classes.image }/>
          </div>
        </div>
      </div>

      <CSSTransition in={ isOpenCalendar } timeout={ 600 } unmountOnExit classNames='filterRangeDropdownWithTwoForms'>
        <div className={ classes.calendar }>
          <RangeCalendar onSubmit={ onSubmit } type='duo' onClear={ onClear }/>
        </div>
      </CSSTransition>
    </>)
};

export default injectSheet(classes)(FilterRangeDropdownWithTwoForms)