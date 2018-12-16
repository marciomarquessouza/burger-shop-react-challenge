import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const impIngredients = Object.keys(props.ingredients).map((key) => {
    return [...Array(props.ingredients[key])].map((_, index) => {
      return <BurgerIngredients key={ key + index } type={ key } />
    });
  });
  return (
    <div className={ classes.Burger }>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      { impIngredients }
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
};

export default burger
