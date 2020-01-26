import React from 'react';
import injectSheet from 'react-jss';
import {subtitle} from "../../Classes";
import FilterRangeDropdownWithTwoForms
  from "../../FormElements/Dropdowns/FilterRangeDropdownWithTwoForms/FilterRangeDropdownWithTwoForms";

const classes = {
  date: {
    marginBottom: 21,
    zIndex: 2
  },
  dateSubtitles: {
    display: 'flex',
    justifyContent: 'space-between',
  }, subtitle: {
    width: 150,
    ...subtitle
  },
};

const Date = ({classes,setDaysCount, ...rest}) => {
  return (
    <div className={classes.date}>
      <div className={classes.dateSubtitles}>
        <div className={classes.subtitle}>прибытие</div>
        <div className={classes.subtitle}>выезд</div>
      </div>
      <div className={classes.calendar}>
        <FilterRangeDropdownWithTwoForms setDaysCount={setDaysCount}/>
      </div>
    </div>
  )
};

export default injectSheet(classes)(Date);