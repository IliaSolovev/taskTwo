import React from 'react';
import './App.css';
import './components/UI_Kits/Buttons/CheckboxButton/checkbox.css'
import DateDropdown from "./components/UI_Kits/Dropdowns/DateDropdown/DateDropdown";
import DateRangeDropdown from "./components/UI_Kits/Dropdowns/FilterRangeDropdown/FilterRangeDropdown";

function App (){
  return (
    <div className="App">
      <DateRangeDropdown/>
    </div>
  );
}

export default App;
