import React, {useState, useEffect} from "react";
import DayBlock from "./DayBlock";
import injectSheet from 'react-jss';
import {DarkShade100, DarkShade25, DarkShade5, Purple} from "../../../Colors";
import arrow_back from './images/arrow_back.png';
import arrow_forward from './images/arrow_forward.png';
import {H1, H3} from "../../../Fonts";
import DisableDayBlock from "./DisableDayBlock";
import TransparentButtonWithoutBorder from "../Buttons/TransparentButtonWithoutBorder/TransparentButtonWithoutBorder";


const classes = {
  root: {
    width: 320,
    maxHeight: 439,
    padding: 20,
    background: '#fff',
    border: `1px solid ${ DarkShade25 }`,
    boxShadow: `0px 10px 20px ${ DarkShade5 }`,
    boxSizing: 'border-box',
    borderRadius: 4,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    ...H1,
    color: DarkShade100
  },
  daysHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    ...H3,
    color: Purple,
    textAlign: 'center',
    '& *': {
      width: 40,
      height: 40
    }
  },
  days: {
    width: 280,
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  day: {},
  footer:{
    display: 'flex',
    justifyContent: 'space-between',
  }

};

const Calendar = ({classes, ...rest}) => {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',];
  let [currentDate, setCurrentDate] = useState(new Date());
  let [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  let [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  let [currentDay, setCurrentDay] = useState([currentDate.getDay(), currentMonth, currentYear]);
  let [daysOfTheCurrentMonth, setDaysOfTheCurrentMonth] = useState(getMonth(currentYear, currentMonth));
  let [displayDays, setDisplayDays] = useState(getDays(daysOfTheCurrentMonth, currentDay, currentMonth, currentYear));
  useEffect(() => {
    setCurrentMonth(currentDate.getMonth());
  },[currentDate]);
  
  useEffect(() => {
    setCurrentYear(currentDate.getFullYear());
  },[currentDate]);

  useEffect(() => {
    setDaysOfTheCurrentMonth(getMonth(currentYear, currentMonth));
  },[currentDate, currentMonth, currentYear]);

  useEffect(() => {
    setDisplayDays(getDays(daysOfTheCurrentMonth, currentDay, currentMonth, currentYear));
  },[currentDate, currentDay, currentMonth, currentYear, daysOfTheCurrentMonth]);

  const changeMonth = (symbol) => {
    if (symbol === '+') {
      setCurrentDate(new Date(currentYear, currentMonth + 1));
    } else if (symbol === '-') {
      setCurrentDate(new Date(currentYear, currentMonth - 1));
    }
  };
  
  return (
    <div className={ classes.root }>
      <div className={ classes.header }>
        <button style={ {border: 'none', outline: 'none', background: 'none', cursor: 'pointer'} }
                onClick={ () => changeMonth('-') }>
          <img src={ arrow_back } alt=""/>
        </button>
        <div className={ classes.title }>{ months[currentMonth % 12] } { currentYear }</div>
        <button style={ {border: 'none', outline: 'none', background: 'none', cursor: 'pointer'} }
                onClick={ () => changeMonth('+') }>
          <img src={ arrow_forward } alt=""/>
        </button>
      </div>
      <div className={ classes.daysHeader }>
        { ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, id) => <div key={ id }>{ day }</div>) }
      </div>
      <div className={ classes.days }>
        { displayDays }
      </div>
      <div className={classes.footer}>
        <div><TransparentButtonWithoutBorder text='Очистить' isActive={false}/></div>
        <div><TransparentButtonWithoutBorder text='Очистить' isActive={true}/></div>
      </div>
    </div>)
};


const getMonth = (year = 2019, month = 0,) => {
  const dates = [
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  const lastDay = getLastDayOfMonth(year, month);
  const lastDayPrevMont = getLastDayOfMonth(year, month - 1);
  let currentObj = 0;

  for (let i = 1; i <= lastDay; i++) {
    let date = new Date(year, month, i).toString();
    let dayOfTheWeek = getDayOfTheWeek(date);
    dates[currentObj] = [...dates[currentObj], i];
    if (dayOfTheWeek === 'Sun') {
      currentObj += 1;
    }
  }

  if (dates[0].length < 7) {
    let range = 7 - dates[0].length - 1;
    for (let i = range; i >= 0; i--) {
      dates[0] = [lastDayPrevMont - range + i, ...dates[0]];
    }
  }

  if (dates[4].length < 7) {

    let range = 7 - dates[4].length;
    for (let i = 1; i <= range; i++) {
      dates[4] = [...dates[4], i];
    }

  } else if (dates[5].length > 0) {
    let range = 7 - dates[5].length || 1;
    for (let i = 1; i <= range; i++) {
      dates[5] = [...dates[5], i];
    }

  }
  return dates
};

const getDayOfTheWeek = (date) => {
  let day = date.split(' ')[0];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  for (let i = 0; i < 7; i++) {
    if (day === days[i]) return days[i];
  }
};

const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
};
const getDays = (daysOfTheCurrentMonth, currentDay, currentMonth, currentYear, arr = []) => {
  let displayDays = [...arr];
  for (let i = 0; i < 7; i++) { // первая строчка
    if (daysOfTheCurrentMonth[0][i] > 7) {
      displayDays = [...displayDays, <DisableDayBlock day={ daysOfTheCurrentMonth[0][i] }
                                                      key={ `${ daysOfTheCurrentMonth[0][i] }-${ currentMonth }-${ currentYear } ` }/>]
    } else {
      displayDays = [...displayDays,
        <DayBlock key={ `${ daysOfTheCurrentMonth[0][i] }-${ currentMonth }-${ currentYear }` }
                  day={ daysOfTheCurrentMonth[0][i] }
                  currentDay={ currentDay[0] === daysOfTheCurrentMonth[0][i]
                  && currentDay[1] === currentMonth
                  && currentDay[2] === currentYear }/>]
    }
  }
  for (let i = 1; i < 4; i++) {
    daysOfTheCurrentMonth[i].map((day, id) => {
      displayDays = [...displayDays, <DayBlock key={ `${ id }-${ day }-${ currentMonth }-${ currentYear }` }
                                               day={ day }
                                               currentDay={ currentDay[0] === day
                                               && currentDay[1] === currentMonth
                                               && currentDay[2] === currentYear }/>];
    })
  }
  for (let i = 4; i < 6; i++) {
    daysOfTheCurrentMonth[i].map((day, id) => {
      if (day < 7) {
        displayDays = [...displayDays, <DisableDayBlock key={ `${ id }-${ day }-${ currentMonth }-${ currentYear }` }
                                                        day={ day }
                                                        currentDay={ currentDay[0] === day
                                                        && currentDay[1] === currentMonth
                                                        && currentDay[2] === currentYear }/>];
      } else {
        displayDays = [...displayDays, <DayBlock key={ `${ id }-${ day }-${ currentMonth }-${ currentYear }` }
                                                 day={ day }
                                                 currentDay={ currentDay[0] === day
                                                 && currentDay[1] === currentMonth
                                                 && currentDay[2] === currentYear }/>];
      }
    })
  }
  return displayDays;
}
export default injectSheet(classes)(Calendar);