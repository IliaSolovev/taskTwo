import React, {useState} from "react";
import injectSheet from 'react-jss';
import DropdownFiled from "../DropdownFiled/DropdownFiled";
import DropdownCounter from "../DropdownCounter/DropdownCounter";
import {DarkShade25, DarkShade5} from "../../../ColorsAndTypes/Colors";
import {CSSTransition} from "react-transition-group";
import './GuestsDropdown.css'
import {declOFNum} from "../ParseWord";

import {H3} from "../../../ColorsAndTypes/Fonts";
import TransparentButtonWithoutBorder
  from "../../Buttons/TransparentButtonWithoutBorder/TransparentButtonWithoutBorder";

const classes = {
    content: {
        position: 'absolute',
        width: props => props.isFound?266:320,
        background: '#fff',
        border: `1px solid ${DarkShade25}`,
        boxSizing: `border-box`,
        boxShadow: `0px 10px 20px ${DarkShade5}`,
        overflow: 'hidden',
        zIndex: 2,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '13px 0',
        ...H3
    },
};


const GuestsDropdown = ({classes,isFound, ...rest}) => {
    const titles = ['Взрослые', 'Дети', 'Младенцы'];
    const wordsArr = ['гость', 'гостя', 'гостей'];
    const [data, setData] = useState(0);
    const [text, setText] = useState(declOFNum(data, wordsArr));
    const [values, setValuesState] = useState({0: 0, 1: 0, 2: 0});
    const [isOpen, setUsOpen] = useState(false);

    const setValues = (id, value) => {
        setValuesState({...values, [id]: value});
    };

    const setNewData = () => {
        setData(values[0] + values[1] + values[2]);
        setText(declOFNum(values[0] + values[1] + values[2], wordsArr));
        setUsOpen(false);
    };

    return (
        <div>
            <DropdownFiled text={data ? `${data} ${text}` : 'Сколько гостей'} setUsOpen={() => setUsOpen(!isOpen)} isFound={isFound}/>
            <CSSTransition in={isOpen} timeout={1000} classNames='guestsDropdown' unmountOnExit>
                <div className={classes.content}>
                    <div>
                        {titles.map((title, id) => <DropdownCounter key={id} title={title}
                                                                    setValues={setValues} id={id}
                                                                    value={values[id]}/>)}
                    </div>
                    <div className={classes.buttons}>
                        <div onClick={() => {
                            setData(0);
                            setValuesState({0: 0, 1: 0, 2: 0});
                        }}>
                            <TransparentButtonWithoutBorder text='Очистить' isActive={false}/>
                        </div>
                        <div onClick={setNewData}>
                            <TransparentButtonWithoutBorder text='Применить' isActive={true}/>
                        </div>
                    </div>
                </div>
            </CSSTransition>

        </div>)
};

export default injectSheet(classes)(GuestsDropdown);

