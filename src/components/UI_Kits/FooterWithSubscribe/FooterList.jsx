import React from "react";
import injectSheet from 'react-jss';
import {Body, H3} from "../ColorsAndTypes/Fonts";
import {DarkShade100, DarkShade50} from "../ColorsAndTypes/Colors";

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    ':last-child':{
      marginTop: 0,
    }
  },
  title: {
    ...H3,
  },
  item: {
    ...Body,
    color: DarkShade50,
    marginTop: 20,
  }
};

const FooterList = ({classes, items, title, ...rest}) => {
  const listItems = items.map((item,id) => <div key={id} className={classes.item}>{item}</div>)
  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      {listItems}
    </div>
  )
};

export default injectSheet(classes)(FooterList);
