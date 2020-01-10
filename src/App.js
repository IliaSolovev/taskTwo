import React from 'react';
import './App.css';
import RateButton from "./components/UI_Kits/Buttons/RateButton/RateButton";

function App (){
  return (
    <div className="App">

      <RateButton defaultValue={0}/>
    </div>
  );
}

export default App;
