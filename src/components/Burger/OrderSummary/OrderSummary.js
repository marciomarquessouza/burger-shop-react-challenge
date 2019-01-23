import React from 'react';
import Aux from '../../../hoc/Aux';

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
      <p>Continue to Checkout?</p>
    </Aux>
  )
};

export default orderSummary;
