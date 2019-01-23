import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredients = props.ingredients;
  const ingredientSummary = Object.keys(ingredients)
    .map((ingredient) => {
      return (
        <li key={ ingredient }>
          <span style={{textTransform: 'captalize'}}>{ ingredient }</span>:
          { props.ingredients[ingredient]}
        </li>
      );
  })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        { ingredientSummary }
      </ul>
      <p><strong>Total Price:</strong> { props.price } </p>
      <p>Continue to Checkout?</p>
      <Button
        btnType = "Danger"
        clicked = { props.purchaseCanceled }
      >
        Cancel
      </Button>
      <Button
        btnType = "Success"
        clicked = { props.purchaseContinue }
      >
        Go!
      </Button>
    </Aux>
  )
};

export default orderSummary;
