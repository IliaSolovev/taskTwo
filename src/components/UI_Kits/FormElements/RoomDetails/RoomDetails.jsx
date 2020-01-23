import React from "react";
import insert_emoticon from './images/insert_emoticon.svg';
import injectSheet from 'react-jss';
import {Body, H3} from "../../ColorsAndTypes/Fonts";
import {DarkShade10, DarkShade75} from "../../ColorsAndTypes/Colors";

const classes = {
  root: {
    width: 291,
    height:40,
    paddingBottom: 7,
    display: 'flex',
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${DarkShade10}`
  },
  image: {},
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginLeft: 10
  },
  title: {
    ...H3,
    color:DarkShade75
  },
  text: {
    ...Body
  }
};

const RoomDetails = ({img = insert_emoticon, classes, title = 'Комфорт', text = 'Шумопоглощающие стены', ...rest}) => {
  return (
    <div className={ classes.root }>
      <div className={ classes.image }><img src={ img } alt=""/></div>
      <div className={ classes.content }>
        <div className={ classes.title }>{ title }</div>
        <div className={ classes.text }>{ text }</div>
      </div>
    </div>
  )
};

export default injectSheet(classes)(RoomDetails)