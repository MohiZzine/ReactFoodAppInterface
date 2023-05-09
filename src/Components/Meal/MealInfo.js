import React from "react";
import classes from "./MealInfo.module.css";

const MealInfo = (props) => {
  return (
    <div className={classes.meal__info}>
      <h3>{props.name}</h3>
      <p className={classes.meal__description}>
        <em>{props.description}</em>
      </p>
      <p className={classes.meal__price}>${props.price}</p>
    </div>
  );
};

export default MealInfo;
