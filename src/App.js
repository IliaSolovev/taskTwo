import React from 'react';
import './App.css';
import './components/UI_Kits/Buttons/CheckboxButton/checkbox.css'
import RichCheckboxButton from "./components/UI_Kits/Buttons/RichCheckboxButton/RichCheckboxButton";
import CheckboxList from "./components/UI_Kits/Dropdowns/CheckboxList/CheckboxList";

function App (){
  return (
    <div className="App">
      <RichCheckboxButton/>
      <CheckboxList/>
    </div>
  );
}

export default App;
