import React from "react";
import {de} from "react-date-range/src/locale";

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декаюрь',];

const Calendar = ({...rest}) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() - 4;
  const currentYear = currentDate.getFullYear();
  const daysOfTheCurrentMonth = getMonth(currentYear, currentMonth);
  console.log(daysOfTheCurrentMonth);

  return (
    <div>

    </div>)
};

export default Calendar;

const getMonth = (year = 2019, month = 0,) => {
  const dates = {
    0: {length: 0},
    1: {length: 0},
    2: {length: 0},
    3: {length: 0},
    4: {length: 0},
    5: {length: 0},
  };
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const lastDay = getLastDayOfMonth(year, month);
  const lastDayPrevMont = getLastDayOfMonth(year, month - 1);
  const lastDayNextMont = getLastDayOfMonth(year, month + 1);
  let currentObj = 0;

  for (let i = 1; i <= lastDay; i++) {
    let date = new Date(year, month, i).toString();
    let dayOfTheWeek = getDayOfTheWeek(date);
    dates[currentObj][dayOfTheWeek] = i;
    dates[currentObj].length++;
    if (dayOfTheWeek === 'Sun') {
      currentObj += 1;
    }
  }

  if (dates[0].length < 7) {
    let range = 7 - dates[0].length - 1;
    for (let i = 0; i <= range; i++) {
      dates[0][days[i]] =  lastDayPrevMont - range + i;
      dates[0].length++;
    }
  }
  if (dates[5].length < 7) {
    let range =  dates[5].length ;
    for (let i = range; i < 6; i++) {
      dates[5][days[i]] = i;
      dates[5].length++;
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