import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let impIngredients = Object.keys(props.ingredients).map((key) => {
    return [...Array(props.ingredients[key])].map((_, index) => {
      return <BurgerIngredients key={ key + index } type={ key } />
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);
  if (impIngredients.length === 0) {
    impIngredients = <p>Please, start to add the ingredients</p>
  }
  return (
    <div className={ classes.Burger }>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      { impIngredients }
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
};

export default burger
