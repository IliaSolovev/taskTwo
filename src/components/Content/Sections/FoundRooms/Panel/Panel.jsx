import React from "react";
import injectSheet from 'react-jss';
import {H3} from "../../../../UI_Kits/ColorsAndTypes/Fonts";
import FilterRangeDropdown from "../../../../UI_Kits/FormElements/Dropdowns/FilterRangeDropdown/FilterRangeDropdown";
import GuestsDropdown from "../../../../UI_Kits/FormElements/Dropdowns/GuestsDropdown/GuestsDropdown";
import RangeSlider from "../../../../UI_Kits/FormElements/RangeSlider/RangeSlider";
import CheckboxButtons from "../../../../UI_Kits/FormElements/Buttons/CheckboxButtons/CheckboxButton";
import FurnitureDropdown from "../../../../UI_Kits/FormElements/Dropdowns/FurnitureDropdown/FurnitureDropdown";
import CheckboxList from "../../../../UI_Kits/FormElements/Dropdowns/CheckboxList/CheckboxList";

const classes = {
  title: {
    marginBottom: 5,
    ...H3,
    textTransform: 'uppercase'
  },
  panelItem: {
    position: 'relative',
    marginBottom: 20,
  },
};

const Panel = ({classes, ...rest}) => {
  return (
    <>
      <div className={ classes.panelItem }>
        <div className={ classes.title }>даты пребывания в отеле</div>
        <FilterRangeDropdown/>
      </div>

      <div className={ classes.panelItem }>
        <div className={ classes.title }>гости</div>
        <GuestsDropdown isFound={ true }/>
      </div>

      <div className={ classes.panelItem }>
        <RangeSlider/>
      </div>

      <div className={ classes.panelItem }>
        <CheckboxButtons
          values={ ['Можно курить', 'Можно с питомцами', 'Можно пригласить гостей (до 10 человек)'] }/>
      </div>

      <div className={ classes.panelItem }>
        <div className={ classes.title } style={ {marginBottom: 10} }>доступность</div>
        <CheckboxButtons
          values={ [['Широкий коридор', 'Ширина коридоров в номере не менее 91 см.'], ['Помощник для инвалидов', 'На 1 этаже вас встретит специалист и проводит до номера.']] }
          isRich={ true }/>
      </div>

      <div className={ classes.panelItem }>
        <div className={ classes.title }> удобства номера</div>
        <FurnitureDropdown/>
      </div>

      <div className={ classes.panelItem }>
        <CheckboxList/>
      </div>
    </>
  )
};

export default injectSheet(classes)(Panel);