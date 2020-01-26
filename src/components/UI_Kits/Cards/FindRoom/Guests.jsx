import React from "react";
import injectSheet from 'react-jss';
import GuestsDropdown from "../../FormElements/Dropdowns/GuestsDropdown/GuestsDropdown";
import {subtitle} from "../../Classes";

const classes = {
  subtitle: {
    width: 150,
    ...subtitle
  },
  guest: {
    marginBottom: 31,
    zIndex: 1
  },
};

const Guests = ({classes,...rest}) => {
  return (
    <div className={classes.guest}>
      <div className={classes.subtitle}>гости</div>
      <GuestsDropdown/>
    </div>
  )
};

export default injectSheet(classes)(Guests);