import React, {useState} from 'react';
import Slider from "@material-ui/core/Slider";
import {DarkShade25, DarkShade50, Green} from "../../ColorsAndTypes/Colors";
import {withStyles} from "@material-ui/styles";
import injectSheet from 'react-jss';
import {H3} from "../../ColorsAndTypes/Fonts";

const AirbnbSlider = withStyles({
  root: {
    width: 266,
    height: 6,
    color: Green,

  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: Green,
    border: `2px solid #fff`,
    boxSizing: 'border-box',
    marginTop: -4,
    boxShadow: 'none',
    '&:focus,&:hover,&$active': {
      boxShadow: 'none',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 6,
  },
  rail: {
    border: `1px solid ${ DarkShade25 }`,
    boxSizing: 'border-box',
    borderRadius: 3,
    color: '#fff',
    opacity: 1,
    height: 6,
  },
})(Slider);

const AirbnbThumbComponent = (props) => {
  return (
    <span { ...props }/>
  );
};


const classes = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 266,
  },
  price: {
    ...H3,
    color: DarkShade50
  },
  title: {
    ...H3,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
};
const RangeSlider = ({classes,maxPrice = 20000,...rest}) => {
  const [value, setValue] = useState([25, 75]);
  const handleChange = (event, value) => {
    setValue(value);
  };
  return (
    <div>
      <div className={ classes.header }>
        <div className={ classes.title }>диапазон цены</div>
        <div className={ classes.price }> {convertMoney(value[0], maxPrice)}₽ - {convertMoney(value[1],maxPrice)}₽</div>
      </div>
      <AirbnbSlider
        ThumbComponent={ AirbnbThumbComponent }
        getAriaLabel={ index => (index === 0 ? 'Minimum price' : 'Maximum price') }
        defaultValue={ value }
        onChange={ handleChange }
      />
    </div>)
};

export default injectSheet(classes)(RangeSlider);

const convertMoney = (number, maxPrice) => {
  const onePercent = maxPrice / 100;
  return number * onePercent
};

