import React from 'react';
import './App.css';
import './components/UI_Kits/FormElements/Buttons/CheckboxButton/checkbox.css'
import injectSheet from 'react-jss';
import FooterWithSubscribe from "./components/UI_Kits/FooterWithSubscribe/FooterWithSubscribe";
import Header from "./components/UI_Kits/Header/Header";
import {extraLarge, medium, small} from "./components/Media";

const classes = {
  root: {
    padding: '20px 0'
  },
  [`@media (max-width: ${extraLarge}px)`]: {
    root: {
      padding: '20px 0'
    }
  },
  [`@media (max-width: ${medium}px)`]: {
    root: {
      padding: '15px 0'
    }
  },
  [`@media (max-width: ${small}px)`]: {
    root: {
      padding: '10xp 0'
    }
  },
};

const App = ({classes, ...rest}) => {
  return (
    <div className={classes.root}>
      <Header/>
    </div>
  );
};

export default injectSheet(classes)(App);
