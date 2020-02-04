import React from "react";
import injectSheet from 'react-jss';
import {H1} from "../../../../UI_Kits/ColorsAndTypes/Fonts";
import rooms from '../rooms';
import Room from "../../../../UI_Kits/Cards/Room/Room";
import Paginator from "../../../../UI_Kits/FormElements/Paginator/Paginator";

const classes = {
  title: {
    ...H1,
    marginBottom: 15
  },
  rooms: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridGap: 10
  },
  paginator: {
    display: 'flex',
    justifyContent: 'center'
  },
  room:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const Rooms = ({classes, ...rest}) => {
  const rooms = rest.rooms.map((room, id) => <Room key={ id } number={ room.number } worth={ room.worth }
                                                   rate={ room.rate }
                                                   callBackCount={ room.feedback } image={ room.image }
                                                   type={ room.type }/>);
  return (
    <>
      <div className={ classes.title }>Номера, которые мы для вас подобрали</div>
      <div className={ classes.rooms }>{ rooms }</div>
      <div className={classes.paginator}>
        <Paginator/>
      </div>
    </>
  )
};

export default injectSheet(classes)(Rooms)