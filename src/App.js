import React from 'react';
import './App.css';
import './components/UI_Kits/Buttons/CheckboxButton/checkbox.css'
import SubscriptionTextField from "./components/UI_Kits/Fields/SubscriptionTextField/SubscriptionTextField";
import RangeSlider from "./components/UI_Kits/RangeSlider/RangeSlider";
import GuestsDropdown from "./components/UI_Kits/Dropdowns/GuestsDropdown/GuestsDropdown";

function App (){
  return (
    <div className="App">
      <GuestsDropdown/>
    </div>
  );
}

export default App;
