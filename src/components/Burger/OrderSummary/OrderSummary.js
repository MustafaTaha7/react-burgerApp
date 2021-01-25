import React, { Component } from "react";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component{
 
// this could be a functional component, dosen't have to be a class
  componentDidUpdate() {
    console.log('[order summary] will update]')
  }
  render(){
    const ingredientstsummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <div>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingrefients: </p>
        <ul>{ingredientstsummary}</ul>
        <p>
          <strong>Tottal Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout ?</p>
        <Button clicked={this.props.purchaseCanceled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          CONTINUE
        </Button>
      </div>
    );
  }
  
};

export default OrderSummary;
