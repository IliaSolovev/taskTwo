import React, {useState} from 'react';
import injectSheet from 'react-jss';

const classes = {
  root: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    width: 42,
    height: 8,
    right: 15,
    bottom: 15,
  },
  button: {
    width: 8,
    height: 8,
    border: '1px solid #fff',
    boxSizing: 'border-box',
    borderRadius: 4,
    cursor: 'pointer'
  },
  active:{
    background: '#fff'
  }

};

const RoomRadioButton = ({classes, ...rest}) => {
  const [active, setActive] = useState(0);
  const buttons = [0, 1, 2, 3].map((id) => <div className={`${classes.button} ${active === id? classes.active:''}` }
                                                key={id} onClick={() => setActive(id)}/>);
  return (
    <div className={classes.root}>
      {buttons}
    </div>
  )
};

export default injectSheet(classes)(RoomRadioButton);