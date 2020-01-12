import React, {useState} from "react";
import injectSheet from 'react-jss'
import favorite from './images/favorite.svg';
import favorite_border from './images/favorite_border.svg';
import {H3} from "../../../../Fonts";
import {DarkShade25, Purple} from "../../../../Colors";

const classes = {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding:'0 6px',
      width: 28,
      height: 20,
      background: '#FFFFFF',
      border: props => props.isLiked ? `1px solid ${ Purple }` : `1px solid ${ DarkShade25 }`,
      boxSizing: 'border - box',
      borderRadius: 10,
      cursor: 'pointer',
    },
    text: {
      ...H3,
      color: props => props.isLiked ? Purple : DarkShade25
    }
  }
;

const Like = ({classes, isLiked, counter, listener, ...rest}) => {
  return (
    <div className={ classes.root } onClick={ listener }>
      <img src={ isLiked ? favorite : favorite_border } onClick={ listener }
           width='10px' height='10px'/>
      <div className={ classes.text }>{ counter }</div>
    </div>)
};

const StyledLike = injectSheet(classes)(Like);

const LikeButton = ({classes,countLikes = 0, ...rest}) => {
  const [counter, setCounter] = useState(countLikes);
  const [isLiked, setIsLiked] = useState(false);

  const listener = () => {
    if (!isLiked) {
      setIsLiked(true);
      setCounter(counter + 1)
    } else {
      setIsLiked(false);
      setCounter(counter - 1)
    }
  };
  return <StyledLike isLiked={ isLiked } counter={ counter } listener={ listener }/>
};

export default LikeButton;

