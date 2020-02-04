import React from 'react';
import './App.css';
import './components/UI_Kits/FormElements/Buttons/CheckboxButtons/checkbox.css'
import injectSheet from 'react-jss';
import Header from "./components/UI_Kits/Header/Header";
import {extraLarge, medium, small} from "./components/Media";
import Footer from "./components/UI_Kits/Footer/Footer";
import FooterWithSubscribe from "./components/UI_Kits/FooterWithSubscribe/FooterWithSubscribe";
import Content from "./components/Content/Content";

const classes = {
  root: {
    padding: '20px 0',
    '& a':{
      textDecoration: 'none'
    }
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
      <Content/>
      <FooterWithSubscribe/>
    </div>
  );
};

export default injectSheet(classes)(App);
