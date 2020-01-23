import React from "react";
import injectSheet from 'react-jss';
import {DarkShade25} from "../../ColorsAndTypes/Colors";
import eclipse from './images/Ellipse.svg';
import {Body} from "../../ColorsAndTypes/Fonts";

const classesBulletList = {
  ul: {
    listStyleImage: `url(${eclipse})`,
  },
  li: {
    marginBottom:10,
    ...Body
  }
};

const BulletList = ({classes, ...rest}) => {
  const values = ['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия — после 13:00, а выезд до 12:00'];

  return (
    <ul className={ classes.ul }>
      { values.map((value, id) => (
        <li key={ id } className={ classes.li }>
          <div>{ value }</div>
        </li>)
      ) }
    </ul>)
};


export default injectSheet(classesBulletList)(BulletList)
