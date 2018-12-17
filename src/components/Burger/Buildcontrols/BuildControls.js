import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={ classes.BuildControls }>
    <p>Current Price: <strong>{ props.totalPrice.toFixed(2) }</strong></p>
    { controls.map((ctrl, index) => (
      <BuildControl
        key={ index }
        label={ ctrl.label }
        added={ () => props.ingredientAdded(ctrl.type) }
        removed={ () => props.ingredientDeleted(ctrl.type) }
        disabled={ props.disabled[ctrl.type] }
      >
      </BuildControl>
    ))}
    <button
      className={ classes.OrderButton }
      disabled={ !props.purchasable }
    >
      ORDER NOW
    </button>
  </div>
)

export default buildControls;
