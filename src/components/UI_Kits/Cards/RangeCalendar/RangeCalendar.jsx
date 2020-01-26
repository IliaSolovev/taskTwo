import React, {useEffect, useState} from "react";
import {getDays, getMonth} from "./Functions";
import arrow_back from "./images/arrow_back.png";
import arrow_forward from "./images/arrow_forward.png";
import TransparentButtonWithoutBorder from "../../FormElements/Buttons/TransparentButtonWithoutBorder/TransparentButtonWithoutBorder";
import {DarkShade100, DarkShade25, DarkShade5, Purple} from "../../ColorsAndTypes/Colors";
import {H1, H3} from "../../ColorsAndTypes/Fonts";
import injectSheet from "react-jss";

const classes = {
    root: {
        position: 'absolute',
        width: 320,
        maxHeight: 439,
        padding: 20,
        background: '#fff',
        border: `1px solid ${DarkShade25}`,
        boxShadow: `0px 10px 20px ${DarkShade5}`,
        boxSizing: 'border-box',
        borderRadius: 4,
        zIndex:3,
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

const RangeCalendar = ({classes, onSubmit, onClear,type='solo', ...rest}) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',];
    let [currentDate, setCurrentDate] = useState(new Date());
    let [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    let [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    let [currentDay, setCurrentDay] = useState([currentDate.getDate(), currentMonth, currentYear]);
    let [activeDays, setActiveDay] = useState([null, null]);
    let [daysOfTheCurrentMonth, setDaysOfTheCurrentMonth] = useState(getMonth(currentYear, currentMonth));
    let [selectDate, setSelectDate] = useState([null, null]);
    const onSelectDate = (date) => {
        let day = date[0];
        if (activeDays[0] === null && activeDays[1] === null) {
            setActiveDay([day, day]);
            setSelectDate([date,date])
        } else if (day < activeDays[0]) {
            setActiveDay([day, activeDays[1]]);
            setSelectDate([date,selectDate[1]]);

        } else {
            setActiveDay([activeDays[0], day]);
            setSelectDate([selectDate[0], date]);
        }
    };
    const submit = () => {
        if(type=== 'solo'){
            if (!activeDays) {
                alert('Выберите дату');
                return;
            } else {
                onSubmit(activeDays, currentMonth);
            }
        }else if(type === 'duo'){
            if (!activeDays) {
                alert('Выберите дату');
                return;
            } else {
                onSubmit(selectDate);
            }
        }

    };
    const clear = () => {
        setActiveDay([null,null]);
        onClear();
    };
    let [displayDays, setDisplayDays] = useState(getDays(daysOfTheCurrentMonth, currentDay, currentMonth, currentYear, [], onSelectDate, activeDays));


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
        setDisplayDays(getDays(daysOfTheCurrentMonth, currentDay, currentMonth, currentYear, [], onSelectDate, activeDays));
    }, [currentDate, currentDay, currentMonth, currentYear, daysOfTheCurrentMonth, activeDays]);

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
export default injectSheet(classes)(RangeCalendar)