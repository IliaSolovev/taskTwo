import React, {useEffect, useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade100, DarkShade25, DarkShade5, Purple} from "../../ColorsAndTypes/Colors";
import arrow_back from './images/arrow_back.png';
import arrow_forward from './images/arrow_forward.png';
import {H1, H3} from "../../ColorsAndTypes/Fonts";
import TransparentButtonWithoutBorder
    from "../../FormElements/Buttons/TransparentButtonWithoutBorder/TransparentButtonWithoutBorder";
import {getDays, getMonth} from "./Functions";


const classes = {
    root: {
        width: 320,
        maxHeight: 439,
        padding: 20,
        background: '#fff',
        border: `1px solid ${DarkShade25}`,
        boxShadow: `0px 10px 20px ${DarkShade5}`,
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
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
    }

};

const Calendar = ({classes, type = 'simple', onSubmit, onClear, ...rest}) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',];
    let [currentDate, setCurrentDate] = useState(new Date());
    let [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    let [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    let [currentDay, setCurrentDay] = useState([currentDate.getDate(), currentMonth, currentYear]);
    let [activeDay, setActiveDay] = useState(null);
    let [daysOfTheCurrentMonth, setDaysOfTheCurrentMonth] = useState(getMonth(currentYear, currentMonth));
    const onSelectDate = (date) => {
        setActiveDay(date);
    };
    const submit = () => {
        if(!activeDay){
            alert('Выберите дату');
            return;
        }
        if(activeDay[0] < currentDay[0] && activeDay[1] <= currentDay[1] && activeDay[2] <= currentDay[2] ){
            alert('Выберите корректную дату');
        }
        else{
            onSubmit(activeDay);
            setActiveDay(null);
        }
    };
    const clear = () => {
        setActiveDay(null);
    };
    let [displayDays, setDisplayDays] = useState(getDays(daysOfTheCurrentMonth, currentDay, currentMonth, currentYear, [], onSelectDate,activeDay));


    useEffect(() => {
        setCurrentMonth(currentDate.getMonth());
    }, [currentDate]);

    useEffect(() => {
        setCurrentYear(currentDate.getFullYear());
    }, [currentDate]);

    useEffect(() => {
        setDaysOfTheCurrentMonth(getMonth(currentYear, currentMonth));
    }, [currentDate, currentMonth, currentYear]);

    useEffect(() => {
        setDisplayDays(getDays(daysOfTheCurrentMonth, currentDay, currentMonth, currentYear, [], onSelectDate,activeDay));
    }, [currentDate, currentDay, currentMonth, currentYear, daysOfTheCurrentMonth,activeDay]);

    const changeMonth = (symbol) => {
        if (symbol === '+') {
            setCurrentDate(new Date(currentYear, currentMonth + 1));
        } else if (symbol === '-') {
            setCurrentDate(new Date(currentYear, currentMonth - 1));
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <button style={{border: 'none', outline: 'none', background: 'none', cursor: 'pointer'}}
                        onClick={() => changeMonth('-')}>
                    <img src={arrow_back} alt=""/>
                </button>
                <div className={classes.title}>{months[currentMonth % 12]} {currentYear}</div>
                <button style={{border: 'none', outline: 'none', background: 'none', cursor: 'pointer'}}
                        onClick={() => changeMonth('+')}>
                    <img src={arrow_forward} alt=""/>
                </button>
            </div>
            <div className={classes.daysHeader}>
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, id) => <div key={id}>{day}</div>)}
            </div>
            <div className={classes.days}>
                {displayDays}
            </div>
            <div className={classes.footer}>
                <div><TransparentButtonWithoutBorder text='Очистить' isActive={false} listener={clear}/></div>
                <div><TransparentButtonWithoutBorder text='Применить' isActive={true} listener={submit}/></div>
            </div>
        </div>)
};


export default injectSheet(classes)(Calendar);