import React from "react";
import injectSheet from 'react-jss';
import FindRoomBlock from "./Sections/FindroomBlock/FindRoomBlock";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FoundRooms from "./Sections/FoundRooms/FoundRooms";

const classes = {
  root: {}
};

const Content = ({classes, ...rest}) => {
  return (
    <div className={ classes.root }>
      <Router>
        <Switch>
          <Route path='/rooms' render={() => <FoundRooms/>}/>
          <Route path='/' render={ () => <FindRoomBlock/> }/>

        </Switch>
      </Router>
    </div>
  )
};

export default injectSheet(classes)(Content);