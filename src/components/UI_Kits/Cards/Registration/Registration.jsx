import React from 'react';
import injectSheet from 'react-jss';
import {Body, H1} from "../../ColorsAndTypes/Fonts";
import TextField from "../../FormElements/Fields/TextFiled/TextFiled";
import RadioButton from "../../FormElements/Buttons/RadioButton/RadioButton";
import Calendar from "../Calendar/Calendar";
import MaskedTextFiled from "../../FormElements/Fields/MaskedTextFiled/MaskedtextFiled";
import {subtitle} from "../../Classes";
import CheckboxButton from "../../FormElements/Buttons/CheckboxButton/CheckboxButton";
import Toggle from "../../FormElements/Buttons/Toggle/Toggle";
import BigButton from "../../FormElements/Buttons/BigButton/BigButton";
import TransparentButton from "../../FormElements/Buttons/TransparentButton/TransparentButton";

const classes = {
  root: {
    maxWidth: 380,
    padding: '40px 30px 30px',
    background: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,

  },
  title: {
    marginBottom: 20,
    ...H1,
  },
  textField: {
    marginBottom: 10
  },
  radioButton: {
    marginBottom: 20
  },
  date: {
    marginBottom: 20
  },
  subtitle: {
    ...subtitle
  },
  data: {
    marginBottom: 20
  },
  bigButton: {
    marginBottom: 30,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Body
  }
};

const Registration = ({classes, ...rest}) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>Регистрация аккаунта</div>
      <div>
        <div className={classes.textField}><TextField placeholder='Имя'/></div>
        <div className={classes.textField}><TextField placeholder='Фамилия'/></div>
        <div className={classes.radioButton}><RadioButton/></div>
      </div>
      <div className={classes.date}>
        <div className={classes.subtitle}>дата рождения</div>
        <MaskedTextFiled/>
      </div>
      <div className={classes.data}>
        <div className={classes.subtitle}>данные для входа в сервис</div>
        <div className={classes.textField}><TextField placeholder='Email'/></div>
        <div className={classes.textField}><TextField placeholder='Пароль' type='password'/></div>
        <Toggle/>
      </div>
      <div className={classes.bigButton}><BigButton/></div>
      <div className={classes.footer}>
        <div>Уже есть аккаунт на Toxin</div>
        <TransparentButton text='войти'/>
      </div>
    </div>
  )
};

export default injectSheet(classes)(Registration);