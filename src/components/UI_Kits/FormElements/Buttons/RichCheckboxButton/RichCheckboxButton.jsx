import React from "react";
import CheckboxButton from "../CheckboxButtons/CheckboxButton";

const RichCheckboxButton = () => {
  const values = [
    ['Широкий коридор', 'Ширина коридоров в номере не менее 91 см.'],
    ['Помощник для инвалидов', 'На 1 этаже вас встретит специалист и проводит до номера.']
  ];
  return <CheckboxButton isRich={ true } values={values}/>
};

export default RichCheckboxButton;