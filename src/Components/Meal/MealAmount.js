import React, { useState } from "react";
import classes from "./MealAmount.module.css";
import Button from "../UI/Button/Button";

const MealAmount = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="meal-amount__handler">
      <div className={classes.meal__amount}>
        <label htmlFor="amount" className={classes.label}>
          Amount
        </label>
        <input
          type="number"
          name="meal_amount"
          id="meal_amount"
          min="1"
          step="1"
          value={amount}
          onChange={amountChangeHandler}
          className={classes.meal__input}
        />
      </div>
      <div className={classes.meal__button}>
        <Button className="add__button add-meal__button">+ Add</Button>
      </div>
    </div>
  );
};

export default MealAmount;
