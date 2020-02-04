import React from "react";
import injectSheet from 'react-jss';
import CostItem from "./CostItem";
import {roomWorth} from "../../../Constants";

const classes = {
  root: {}
};

const Costs = ({daysCount = 0, worthNumber = roomWorth, services = 2179, saleServices = 2179, additionalServices = 300, ...rest}) => {
  return (
    <div className={classes.root}>
      <CostItem text={`${worthNumber}₽ х ${daysCount} суток`} cost={worthNumber * daysCount}/>
      <CostItem text={`Сбор за услуги: ${saleServices ? `скидка ${saleServices}` : ''}` }
                cost={services - saleServices}/>
      <CostItem text={'Сбор за дополнительные услуги'} cost={additionalServices}/>
    </div>)
};

export default injectSheet(classes)(Costs)