import React from "react";
import injectSheet from 'react-jss';
import {DarkShade50, Green, Purple} from "../../../Colors";
import {H3} from "../../../Fonts";

const classes = {
    root: {
        zIndex:1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        background: props => props.currentDay && props.isActiveDay
            ? `linear-gradient(180deg, ${Purple} 0%, #8BA4F9 100%)` :
            props.isDayBetweenActive ? 'rgba(188,156,255,0.25)' :
                props.isActiveDay ? `linear-gradient(180deg, ${Purple} 0%, #8BA4F9 100%)` :
                    props.currentDay ? `linear-gradient(180deg, ${Green} 0%, #66D2EA 100%)` : '',
        borderRadius: 22,
        ...H3,
        color: props => props.currentDay || props.isActiveDay ? '#fff' : DarkShade50,
        cursor: 'pointer',
    }
};

const DayBlock = ({classes, date, listener, ...rest}) => {
    return <div className={classes.root} onClick={() => listener(date[0])}>{date[0]}</div>
};

export default injectSheet(classes)(DayBlock);