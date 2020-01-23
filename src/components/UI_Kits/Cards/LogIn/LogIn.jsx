import React from "react";
import injectSheet from 'react-jss';
import TextField from "../../FormElements/Fields/TextFiled/TextFiled";
import BigButton from "../../FormElements/Buttons/BigButton/BigButton";
import TransparentButton from "../../FormElements/Buttons/TransparentButton/TransparentButton";
import {Body, H1} from "../../ColorsAndTypes/Fonts";

const classes = {
  root: {
    width: 380,
    height: 358,
    border: `1px solid rgba(0, 0, 0, 0.12)`,
    boxSizing: 'border-box',
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    padding: '40px 30px 46px'
  },
  title: {
    ...H1,
    marginBottom: 20,
  },
  email: {
    marginBottom: 10,
  },
  password: {
    marginBottom: 20,
  },
  logIn: {
    marginBottom: 30,
  },
  buttonContainer: {
    display:'flex',
    justifyContent: 'space-between'
  },
  ask: {
    display:'flex',
    alignItems: 'center',
    ...Body
  }
};

const LogIn = ({classes, ...rest}) => {
  return (
    <div className={ classes.root }>

      <form action="#">
        <div className={ classes.title }>Войти</div>
        <div className={ classes.email }><TextField placeholder='Email' type='email'/></div>
        <div className={ classes.password }><TextField placeholder='Пароль' type='password'/></div>
        <div className={ classes.logIn }><BigButton text='Войти' type='submit'/></div>
      </form>

      <div className={ classes.buttonContainer }>
        <div className={ classes.ask }>Нет аккаунта на Toxin?</div>
        <TransparentButton text='Содать'/>
      </div>
    </div>
  )
};

export default injectSheet(classes)(LogIn)