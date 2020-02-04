import React from "react";
import injectSheet from 'react-jss';
import background from './image/findRoomBackgroundImage.png';
import {Body, H3} from "../../../UI_Kits/ColorsAndTypes/Fonts";
import FindRoom from "../../../UI_Kits/Cards/FindRoom/FindRoom";
import {mediaPadding} from "../../../Media";

const classes = {
  ...mediaPadding,
  root: {
    height: '100vh',
    position: 'relative',
    marginTop: 20,
    padding: '70px 0 0 0 ',
    background: `url(${ background }) no-repeat center `,
    backgroundSize: 'cover',
  },
  text:{
    position: 'absolute',
    maxWidth: 297,
    bottom: 20,
    right: 50,
    ...Body,
    textAlign: 'right'
  },

};

const FindRoomBlock = ({classes, ...rest}) => {
  return (
    <div className={ classes.root }>
      <div className={ classes.container }>
          <FindRoom/>
      </div>
      <div className={classes.text}>Лучшие номера для вашей работы, отдыха и просто вдохновения</div>
    </div>
  )
};

export default  injectSheet(classes)(FindRoomBlock);