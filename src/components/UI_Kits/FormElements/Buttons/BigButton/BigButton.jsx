import React from "react";
import injectSheet from 'react-jss'
import {H3} from "../../../ColorsAndTypes/Fonts";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Purple, Purple50} from "../../../ColorsAndTypes/Colors";

const classes = {
    button: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 320,
        height: 44,
        padding: '0 18px 0 90px',
        background: `linear-gradient(180deg, ${Purple} 0%, #8BA4F9 100%)`,
        borderRadius: 22,
        ...H3,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
    },
    text: {
    },
    arrow: {

    }
};

const BigButton = ({classes, text = 'Перейти к оплате', type = '', listener, ...rest}) => {
    return (
        <button type={type} className={classes.button} onClick={listener}>
            <div className={classes.text}>{text}</div>
            <ArrowForwardIcon className={classes.arrow}/>
        </button>)
};

export default injectSheet(classes)(BigButton)