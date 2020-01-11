import React from 'react';
import './App.css';
import './components/UI_Kits/Buttons/CheckboxButton/checkbox.css'
import GuestsDropdown from "./components/UI_Kits/Dropdowns/GuestsDropdown/GuestsDropdown";
import FurnitureDropdown from "./components/UI_Kits/Dropdowns/FurnitureDropdown/FurnitureDropdown";

function App (){
  return (
    <div className="App">
      <FurnitureDropdown/>
    </div>
  );
}

export default App;
