import React, {useState} from "react";
import injectSheet from 'react-jss';
import {H1} from "../../ColorsAndTypes/Fonts";
import {subtitle} from "../../Classes";
import FilterRangeDropdownWithTwoForms
  from "../../FormElements/Dropdowns/FilterRangeDropdownWithTwoForms/FilterRangeDropdownWithTwoForms";
import GuestsDropdown from "../../FormElements/Dropdowns/GuestsDropdown/GuestsDropdown";
import BigButton from "../../FormElements/Buttons/BigButton/BigButton";
import Date from "./Date";
import Guests from "./Guests";
import Header from "./Header";
import Costs from "./Costs";
import {roomWorth} from "../../../Constants";
import Total from "./Total";

const classes = {
  root: {
    width: 380,
    padding: '40px 30px 30px 30px',
    background: '#fff',
    border: `1px solid rgba(0, 0, 0, 0.12)`,
    boxSizing: 'border-box',
    boxShadow: `0px 0px 25px rgba(0, 0, 0, 0.2)`,
    borderRadius: 4,
  },
};

const FindRoom = ({classes, ...rest}) => {
  const [isFound, setIsFound] = useState(false);
  const [daysCount, setDaysCount] = useState(0);
  const [guestsCount, setGuestsCount] = useState(0);
  let worthNumber = roomWorth;
  const search = () => {

  };
  return (
    <>
      <div className={classes.root}>
        <Header isFound={isFound} number={888}/>
        <Date setDaysCount={setDaysCount}/>
        <Guests/>
        {isFound && <Costs daysCount={daysCount || 1} worthNumber={worthNumber}
        />}
        {isFound && <Total cost={(daysCount || 1) * roomWorth + 300}/>}
        <BigButton text={'подобрать номер'} listener={() => setIsFound(true)}/>
      </div>
    </>
  )
};

export default injectSheet(classes)(FindRoom)