import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

import Card from "../UI/Card";

const ExpenseItem = (props) => {
  useState(props.title);
  let title = props.title;
  const clickHandler = () => {
    title = "Updated";
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} $</div>
      </div>
      <button onClick={clickHandler}>click</button>
    </Card>
  );
};

export default ExpenseItem;
