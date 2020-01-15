import React from 'react';
import './App.css';
import './components/UI_Kits/Buttons/CheckboxButton/checkbox.css'
import Calendar from "./components/UI_Kits/Calendar/Calendar";
import MaskedTextFiled from "./components/UI_Kits/Fields/MaskedTextFiled/MaskedtextFiled";

function App (){
  return (
    <div className="App">
      <MaskedTextFiled/>
    </div>
  );
}

export default App;
