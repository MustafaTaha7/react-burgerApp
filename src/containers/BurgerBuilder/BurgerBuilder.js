import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/BuildControls/OrderSummary";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
const INGREDENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    tottalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePerchaseState(ingredents) {
    const ingredients = { ...ingredents };
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredents = {
      ...this.state.ingredients,
    };
    updateIngredents[type] = updatedCount;
    const priceAddition = INGREDENT_PRICES[type];
    const oldPrice = this.state.tottalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      tottalPrice: newPrice,
      ingredients: updateIngredents,
    });
    this.updatePerchaseState(updateIngredents);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredents = {
      ...this.state.ingredients,
    };
    updateIngredents[type] = updatedCount;
    const priceDeduction = INGREDENT_PRICES[type];
    const oldPrice = this.state.tottalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      tottalPrice: newPrice,
      ingredients: updateIngredents,
    });
    this.updatePerchaseState(updateIngredents);
  };

  purchaseHandler = () =>{
    this.setState({ purchasing: true });
  }
  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinueHandler = () => {
    alert("You Continue !")
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    //{salad: true, meat: false, ...}
    return (
      <div>
        <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}
          purchaseCanceled = {this.purchaseCancelHandler} 
          purchaseContinued = {this.purchaseContinueHandler}
          price = {this.state.tottalPrice.toFixed(2)} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredentAdded={this.addIngredientHandler}
          ingredentremoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.tottalPrice}
          purchasable={!this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
