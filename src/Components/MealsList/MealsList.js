import React, { useState } from "react";
import classes from "./MealsList.module.css";
import Card from "../UI/Card/Card";
import Meal from "../Meal/Meal";

const MealsList = () => {
  const MEALS_LIST = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: 1,
      added: false,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      amount: 1,
      added: false,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      amount: 1,
      added: false,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      amount: 1,
      added: false,
    },
  ];

  const totalAmount = MEALS_LIST.filter((meal) => meal.added).reduce(
    (sum, meal) => {
      return sum + meal.amount;
    },
    0
  );

  return (
    <Card className={classes["meals-wrapper"]}>
      <ul>
        {MEALS_LIST.map((meal) => (
          <Meal
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            amount={meal.amount}
          />
        ))}
      </ul>
    </Card>
  );
};

export default MealsList;
