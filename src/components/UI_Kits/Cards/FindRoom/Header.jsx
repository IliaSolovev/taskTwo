import React from "react";
import injectSheet from 'react-jss';
import {Body, H1, H2, H3} from "../../ColorsAndTypes/Fonts";
import {roomWorth} from "../../../Constants";
import {DarkShade50, Purple} from "../../ColorsAndTypes/Colors";

const classes = {
  title: {
    marginBottom: 20,
    ...H1,
  },
};

const Header = ({classes, isFound, ...rest}) => {
  return (
    <>
      {!isFound && <div className={classes.title}>Найдём номера под <br/>ваши пожелания</div>}
      {isFound && <RoomHeader/>}
    </>
  )
};

const roomHeaderClasses = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  room: {
    display: 'flex',
    width: 110,
    height: 30,
  },
  number: {
    ...Body,
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 'normal',
  },
  title: {
    ...H1
  },
  type: {
    marginLeft: 5,
    paddingTop: 10,
    ...H3,
    color: Purple
  },
  worth: {
    paddingTop: 10,
    ...Body,
    '& span': {
      fontWeight: 'bold',
      color: DarkShade50
    }
  },
};

const RoomHeader = injectSheet(roomHeaderClasses)(({classes, number = 888, type = 'Люкс', worth = roomWorth, ...rest}) => {
  return (
    <div className={classes.root}>
      <div className={classes.room}>
        <span className={classes.number}>№ <span className={classes.title}>{number}</span></span>
        <span className={classes.type}>{type}</span>
      </div>
      <div className={classes.worth}><span>{worth}₽</span> в сутки</div>
    </div>
  )
});

export default injectSheet(classes)(Header)
