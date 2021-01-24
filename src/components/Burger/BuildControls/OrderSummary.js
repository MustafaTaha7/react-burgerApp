import React from "react";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredientstsummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingrefients: </p>
      <ul>{ingredientstsummary}</ul>
      <p>
        <strong>Tottal Price: {props.price}</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button clicked={props.purchaseCanceled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderSummary;
