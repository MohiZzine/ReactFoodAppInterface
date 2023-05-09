import React from "react";
import classes from "./Meal.module.css";
import MealInfo from "./MealInfo";
import MealAmount from "./MealAmount";

const Meal = (props) => {
  return (
    <div className={classes["meal-info"]}>
      <MealInfo
        name={props.name}
        description={props.description}
        price={props.price}
      />
      <MealAmount amount={props.amount} />
    </div>
  );
};

export default Meal;
