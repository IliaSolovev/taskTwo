import React from 'react';
import './App.css';
import './components/UI_Kits/Buttons/CheckboxButton/checkbox.css'
import GuestsDropdown from "./components/UI_Kits/Dropdowns/GuestsDropdown/GuestsDropdown";

function App (){
  return (
    <div className="App">
      <GuestsDropdown/>
    </div>
  );
}

export default App;
