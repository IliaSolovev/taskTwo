import React from "react";
import injectSheet from 'react-jss';
import img from './image/image.png';
import RoomRadioButton from "./RoomRadioButton";
import RateButton from "../../FormElements/Buttons/RateButton/RateButton";
import {DarkShade10, DarkShade25, DarkShade50, Purple} from "../../ColorsAndTypes/Colors";
import {Body, H3} from "../../ColorsAndTypes/Fonts";

const classes = {
  root: {
    width: 270,
    height: 257,
    background: '#fff',
    boxShadow: '0px 10px 20px rgba(31, 32, 65, 0.05)',
    borderRadius: 4,
  },
  imageCarousel: {
    position: 'relative',
    width: 270,
    height: 152,
    marginBottom: 20
  },
  status: {
    height: 67,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  number: {
    ...H3,
    fontSize: 17,
    '& span': {
      fontWeight: 'normal',
      fontSize: 14,
    }
  },
  worth: {
    ...Body,
    color: DarkShade50
  },
  rate: {},
  callBackCount: {
    ...Body,
    color: DarkShade50
  },
  boldSpan: {
    fontWeight: 'bold'
  },
  hr: {
    width: 230,
    height: 1,
    background: DarkShade10
  },
  premium:{
    ...H3,
    fontWeight: 'bold',
    color: Purple,
    textTransform: 'uppercase'
  }

};

const Room = ({classes, number = 666, worth = 5000, rate = 4, callBackCount = 25, image = img, type = '', ...rest}) => {
  return (
    <div className={classes.root}>
      <div className={classes.imageCarousel}>
        <div><img src={image} alt=""/></div>
        <RoomRadioButton/>
      </div>
      <div className={classes.status}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className={classes.number}>
            <span>№</span> {number}
            <b className={classes.premium}>  {type}</b>
          </div>
          <div className={classes.worth}><span className={classes.boldSpan}>{worth}₽</span> в сутки</div>
        </div>
        <div className={classes.hr}/>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className={classes.rate}>
            <RateButton defaultValue={rate} isActive={false}/>
          </div>
          <div className={classes.callBackCount}><span className={classes.boldSpan}>{callBackCount}</span> Отзывов</div>
        </div>
      </div>
    </div>
  )
};

export default injectSheet(classes)(Room);
