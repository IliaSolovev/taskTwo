import React from "react";
import injectSheet from 'react-jss';
import {DarkShade50, Green, Purple} from "../../ColorsAndTypes/Colors";
import {H3} from "../../ColorsAndTypes/Fonts";

const classes = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        background: props => props.currentDay && props.isActiveDay
            ? `linear-gradient(180deg, ${Purple} 0%, #8BA4F9 100%)` : props.isActiveDay
                ? `linear-gradient(180deg, ${Purple} 0%, #8BA4F9 100%)` : props.currentDay
                    ? `linear-gradient(180deg, ${Green} 0%, #66D2EA 100%)` : '',
        borderRadius: 22,
        ...H3,
        color: props => props.currentDay || props.isActiveDay ? '#fff' : DarkShade50,
        cursor: 'pointer'
    }
};

const DayBlock = ({classes, date, listener, ...rest}) => {
    return <div className={classes.root} onClick={() => listener(date)}>{date[0]}</div>
};

export default injectSheet(classes)(DayBlock);