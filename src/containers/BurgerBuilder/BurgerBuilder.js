import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
const INGREDENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    tottalPrice: 4
  };

  addIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredents = {
        ...this.state.ingredients
    }
    updateIngredents[type] = updatedCount;
    const priceAddition = INGREDENT_PRICES[type];
    const oldPrice = this.state.tottalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
        tottalPrice:newPrice,
        ingredients: updateIngredents
    })
  }
  removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
        return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredents = {
        ...this.state.ingredients
    }
    updateIngredents[type] = updatedCount;
    const priceDeduction = INGREDENT_PRICES[type];
    const oldPrice = this.state.tottalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
        tottalPrice:newPrice,
        ingredients: updateIngredents
    })
    }
  render() {
      const disabledInfo = {
          ...this.state.ingredients
      };
      for (let key in disabledInfo) {
         disabledInfo[key] = disabledInfo[key] <=0
      }
      //{salad: true, meat: false, ...}
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
        ingredentAdded={this.addIngredientHandler}
        ingredentremoved={this.removeIngredientHandler}
        disabled={disabledInfo}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
