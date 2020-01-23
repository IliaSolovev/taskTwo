import React from "react";
import injectSheet from 'react-jss';
import image from './images/image.png';
import LikeButton from "../Buttons/LikeButton/LikeButton";
import {Body} from "../../ColorsAndTypes/Fonts";

const classes = {
  root: {
    display: 'grid',
    width: 711,
    height: 133,
    gridTemplateColumns: '48px 653px',
    gridTemplateRows: '48px 72px',
    gridTemplateAreas: `'image personInfo' 'likeButton text'`,
    gridGap: 10
  },
  image: {
    gridArea: 'image',
  },
  personInfo: {
    gridArea: 'personInfo',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  name: {
    ...Body,
    fontWeight: 'bold',
  },
  date: {
    ...Body,
  },
  likeButton: {
    gridArea: 'likeButton',
  },
  text: {
    gridArea: 'text',
    ...Body,
  }
};

const ProductReview = ({
                         classes, img = image, name = 'Мурад Сарафанов',
                         date = '5 дней назад', text = 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
                         countLikes = 12, ...rest
                       }) => {
  return (
    <div className={ classes.root }>
      <div className={ classes.image }><img src={ img } alt="" width={ 48 } height={ 48 }/></div>
      <div className={ classes.personInfo }>
        <div className={ classes.name }>{ name }</div>
        <div className={ classes.date }>{ date }</div>
      </div>
      <div><LikeButton countLikes={ countLikes }/></div>
      <div>{ text }</div>
    </div>)
};

export default injectSheet(classes)(ProductReview)