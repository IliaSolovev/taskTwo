import React from 'react';
import './App.css';
import TransparentButtonWithoutBorder
  from "./components/UI_Kits/Buttons/TransparentButtonWithoutBorder/TransparentButtonWithoutBorder";
import PayButton from "./components/UI_Kits/Buttons/PayButton/PayButton";

function App (){
  return (
    <div className="App">
      <PayButton/>
    </div>
  );
}

export default App;
