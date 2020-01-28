import React, {useState} from "react";
import injectSheet from 'react-jss';
import {Body} from "../ColorsAndTypes/Fonts";
import {DarkShade50, DarkShade75} from "../ColorsAndTypes/Colors";

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    ...Body,
    color: DarkShade50,
    cursor: 'pointer'
  },
  activeTitle: {
    ...Body,
    color: DarkShade75,
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

const Navbar = ({classes, ...rest}) => {
  let [active, setActive] = useState(0);
  let titles = ['Home', 'About Us', 'Services', 'Careers', 'News', 'Documentation'].map(
    (title, id) => <div className={active === id ? classes.activeTitle : classes.title}
                        key={id} onClick={() => setActive(id)}>{title}</div>
  );
  return (
    <div className={classes.root}>
      {titles}
    </div>
  )
};

export default injectSheet(classes)(Navbar);
