import React from "react";
import classes from "./Navigation.module.css";
import Button from "../UI/Button/Button";

const Navigation = (props) => {
  return (
    <header>
      <div className={classes["header-container"]}>
        <h1>ReactMeals</h1>
        <Button className="add__button add-to-cart__button">
          Your Cart <span className={classes["add-to-cart__icon"]}>{0}</span>
        </Button>
      </div>
    </header>
  );
};

export default Navigation;
