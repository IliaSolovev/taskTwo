import React, {useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../../../Colors";
import {Body} from "../../../../Fonts";
import expand_more from './image/expand_more.png'
import Calendar from "../../Calendar/Calendar";
import {CSSTransition} from "react-transition-group";
import './Datedropdown.css'

const classes = {
    field: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 15px',
        width: 150,
        height: 44,
        background: '#fff',
        border: `1px solid ${DarkShade25}`,
        boxSizing: 'border-box',
        borderRadius: 4,
        ...Body,
    },
    image: {
        cursor: 'pointer',
    }

};

const DateDropdown = ({classes, ...rest}) => {
    let [isOpenCalendar, setIsOpenCalendar] = useState(true);
    let [text,setText] = useState('ДД.ММ.ГГГГ');
    let temp;

    const onSubmit = (date) => {
        if(date[1] + 1 < 10){
            temp=`${date[0]}.0${date[1] + 1}.${date[2]}`
        }else{
            temp=`${date[0]}.${date[1] + 1}.${date[2]}`
        }
        setText(temp)
    };
    return (
        <>
            <div className={classes.field}>
                <div>{text}</div>
                <div><img src={expand_more} alt="" className={classes.image}
                          onClick={() => setIsOpenCalendar(!isOpenCalendar)}/></div>
            </div>
            <CSSTransition in={isOpenCalendar} timeout={200} unmountOnExit classNames='dateDropdown'>
                <div className={classes.calendar}>
                    <Calendar type='simple' onSubmit={onSubmit} onClear={() => {temp=''}}/>
                </div>
            </CSSTransition>
        </>)
};

export default injectSheet(classes)(DateDropdown)