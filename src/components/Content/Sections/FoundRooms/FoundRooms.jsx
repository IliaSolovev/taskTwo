import React from "react";
import injectSheet from 'react-jss';
import {mediaPadding} from "../../../Media";
import Panel from "./Panel/Panel";
import Rooms from "./Rooms/Rooms";
import {rooms} from "./rooms";

const classes = {
  ...mediaPadding,
  root: {
    paddingTop: 30,
    display: 'grid',
    gridTemplateColumns: '266px auto',
    gridGap: 60
  },
  panel: {},
  rooms: {},

};

const FoundRooms = ({classes, ...rest}) => {
  return (
    <div className={ classes.container }>
      <div className={ classes.root }>
        <div className={ classes.panel }>
          <Panel/>
        </div>
        <div className={ classes.rooms }>
          <Rooms rooms={rooms}/>
        </div>
      </div>
    </div>
  )
};

export default injectSheet(classes)(FoundRooms);