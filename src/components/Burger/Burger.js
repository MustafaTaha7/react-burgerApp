import React from "react";
import Burgeringredient from "./Burgeringredient/Burgeringredient";
import "./Burger.css";
const Burger = (props) => {
  //tranform ingredients obj to array to be able to map through them
  const transformedIngredients = Object.keys(props.ingredients)
  .map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Burgeringredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  },[]);
  console.log(transformedIngredients);

  return (
    <div className="Burger">
      <Burgeringredient type="bread-top" />
      {transformedIngredients.length === 0 ? 'Please start adding ingredients':transformedIngredients}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
