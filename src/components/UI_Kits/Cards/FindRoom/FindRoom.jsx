import React from "react";
import injectSheet from 'react-jss';
import {H1} from "../../ColorsAndTypes/Fonts";
import {subtitle} from "../../Classes";
import RangeCalendar from "../RangeCalendar/RangeCalendar";
import FilterRangeDropdownWithTwoForms
    from "../../FormElements/Dropdowns/FilterRangeDropdownWithTwoForms/FilterRangeDropdownWithTwoForms";
import GuestsDropdown from "../../FormElements/Dropdowns/GuestsDropdown/GuestsDropdown";
import BigButton from "../../FormElements/Buttons/BigButton/BigButton";

const classes = {
    root: {
        width: 380,
        height: 374,
        padding: '40px 30px 30px 30px',
        background: '#fff',
        border: `1px solid rgba(0, 0, 0, 0.12)`,
        boxSizing: 'border-box',
        boxShadow: `0px 0px 25px rgba(0, 0, 0, 0.2)`,
        borderRadius: 4,
    },
    title: {
        marginBottom: 20,
        ...H1,
    },
    date: {
        marginBottom: 21,
        zIndex: 2
    },
    dateSubtitles: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    subtitle: {
        width: 150,
        ...subtitle
    },
    calendar: {},
    guest: {
        marginBottom: 31,
        zIndex: 1
    },
};

const FindRoom = ({classes, ...rest}) => {
    return (
        <div className={classes.root}>
            <div className={classes.title}>Найдём номера под <br/>ваши пожелания</div>
            <div className={classes.date}>
                <div className={classes.dateSubtitles}>
                    <div className={classes.subtitle}>прибытие</div>
                    <div className={classes.subtitle}>выезд</div>
                </div>
                <div className={classes.calendar}>
                    <FilterRangeDropdownWithTwoForms/>
                </div>
            </div>
            <div className={classes.guest}>
                <div className={classes.subtitle}>гости</div>
                <GuestsDropdown/>
            </div>
            <BigButton text={'подобрать номер'}/>
        </div>
    )
};

export default injectSheet(classes)(FindRoom)