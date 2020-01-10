import React from 'react';
import './App.css';
import RateButton from "./components/UI_Kits/Buttons/RateButton/RateButton";
import CheckboxButton from "./components/UI_Kits/Buttons/CheckboxButton/CheckboxButton";

function App (){
  return (
    <div className="App">
      <CheckboxButton values={['Можно курить','Можно с питомцами','Можно пригласить гостей (до 10 человек)']}/>
    </div>
  );
}

export default App;
