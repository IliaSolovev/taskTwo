import React, {useState} from "react";
import injectSheet from 'react-jss';
import {DarkShade100, DarkShade25, DarkShade50, DarkShade75} from "../../../../Colors";
import {Body} from "../../../../Fonts";

const classes = {
  input: {
    width: 320,
    height: 44,
    padding: '0 0 0 15px',
    background: '#FFFFFF',
    border: `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 4,
    outline: 'none',
    ...Body,
    color: DarkShade75,
    '&::placeholder': {
      color: DarkShade25
    }
  }

};

const MaskedTextFiled = ({classes, ...rest}) => {
  let [value, setValue] = useState('');
  const onChange = (e) => {
    let value = e.target.value;
    if (value.charCodeAt() !== 49) {
      alert('Вы вводите не корректную дату!!!')
    } else if (value.length === 2) {
      value += '.';
      setValue(value);
    } else if (value.length === 5) {
      value += '.';
      setValue(value);
    } else if (value.length > 10) {
      alert('Вы вводите не корректную дату!!!')
    } else {
      setValue(value);
    }
  };
  return <StyledMaskedTextFiled value={ value } onChange={ onChange }/>
};

const StyledMaskedTextFiled = injectSheet(classes)(({classes, value, onChange, ...rest}) => {
  return <input className={ classes.input } value={ value } onChange={ onChange }
                type="text" placeholder='ДД.ММ.ГГГГ'/>
});

export default injectSheet(classes)(MaskedTextFiled);