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
    { controls.map((ctrl, index) => (
      <BuildControl key={ index } label={ ctrl.label }></BuildControl>
    )) }
  </div>
)

export default buildControls;
