import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // Could be a functional component, only to create a example to map when the modal is called
  render () {
    const ingredients = this.props.ingredients;
    const ingredientSummary = Object.keys(ingredients)
      .map((ingredient) => {
        return (
          <li key={ ingredient }>
            <span style={{textTransform: 'captalize'}}>{ ingredient }</span>:
            { this.props.ingredients[ingredient]}
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
        <p><strong>Total Price:</strong> { this.props.price } </p>
        <p>Continue to Checkout?</p>
        <Button
          btnType = "Danger"
          clicked = { this.props.purchaseCanceled }
        >
          Cancel
        </Button>
        <Button
          btnType = "Success"
          clicked = { this.props.purchaseContinue }
        >
          Go!
        </Button>
      </Aux>
    )
  }

};

export default OrderSummary;
