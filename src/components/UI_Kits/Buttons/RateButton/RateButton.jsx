import React, {useState} from "react";
import injectSheet from 'react-jss'
import star from './images/star.svg'
import star_border from './images/star_border.svg'


const classesRate = {
  rate: {
    cursor: 'pointer'
  }
};

const ClassesButton = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 120,
    height: 24,
  },
};

const Rate = ({classes, isFill, id, mouseOverListener, clickListener, ...rest}) => {

  return (
    <div onMouseOver={ () => mouseOverListener(id) } onClick={ () => clickListener(id) } className={ classes.rate } >
      <img src={ isFill ? star : star_border } alt=""/>
    </div>)
};

const StyledRate = injectSheet(classesRate)(Rate);

const RateButton = ({defaultValue = 0, classes, ...rest}) => {
  const [rate, setRate] = useState(0);
  const [tempRate, setTampRate] = useState(0);
  const mouseOverListener = (id) => {
    setTampRate(id);
  };
  const clickListener = (id) => {
    setRate(id);
  };

  let rates = [1, 2, 3, 4, 5].map(item => {
    let isFill = false;
    if (item <= tempRate) {
      isFill = true;}
    else if (item <= rate) {
      isFill = true;}
    return (<StyledRate key={ item } id={ item } mouseOverListener={ mouseOverListener }
                        clickListener={ clickListener } isFill={ isFill }/>)
  });

  return (
    <div className={ classes.root } onMouseLeave={() => mouseOverListener(0)}>
      { rates }
    </div>)
};


export default injectSheet(ClassesButton)(RateButton);