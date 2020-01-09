import React from 'react';
import './App.css';
import LikeButton from "./components/UI_Kits/Buttons/LikeButton/LikeButton";
import { purple } from '@material-ui/core/colors';
import {Purple} from "./Colors";

function App (){
  return (
    <div className="App">
      <LikeButton />
    </div>
  );
}

export default App;
