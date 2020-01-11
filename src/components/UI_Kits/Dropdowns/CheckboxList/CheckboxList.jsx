import React, {useState} from "react";
import injectSheet from 'react-jss';
import CheckboxButton from "../../Buttons/CheckboxButton/CheckboxButton";
import expand_more_down from './images/expand_more_down.svg';
import expand_more_up from './images/expand_more_up.svg';
import {H3} from "../../../../Fonts";
import {CSSTransition} from "react-transition-group";
import './CheckboxList.css';

const classes = {
  root: {
    width: 266,
  },
  title: {
    ...H3,
    textTransform: 'uppercase',
  },
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  image:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
};

const CheckboxList = ({classes, title = 'дополнительные удобства', ...rest}) => {
  const values = ['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка', 'Телевизор', 'Шампунь', 'Телевизор', 'Шампунь'];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={ classes.root }>
      <div className={classes.header}>
        <div className={ classes.title }>{ title }</div>
        <div><img className={classes.image} src={ isOpen ? expand_more_up : expand_more_down } onClick={() => setIsOpen(!isOpen)} alt=""/></div>
      </div>
      <CSSTransition in={isOpen} timeout={400} unmountOnExit classNames='checkboxList'>
        <CheckboxButton values={ values }/>
      </CSSTransition>

    </div>)
};


export default injectSheet(classes)(CheckboxList)