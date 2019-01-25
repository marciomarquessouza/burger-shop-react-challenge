import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Buildcontrols/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  // constructor() {
  //   super(props);
  // };
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updateIngredients);
  };
  deleteIngredientHandle = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updateCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updateIngredients);
  };
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
    .map((igKey) => {
      return ingredients[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    },0);
    this.setState({ purchasable: sum > 0 });
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert('You continue!');
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return(
      <Aux>
        <Modal show = { this.state.purchasing } modalClosed = { this.purchaseCancelHandler }>
          <OrderSummary
            ingredients={ this.state.ingredients }
            purchaseCanceled = { this.purchaseCancelHandler }
            purchaseContinue = { this.purchaseContinueHandler }
            price = { this.state.totalPrice.toFixed(2) }
          >
          </OrderSummary>
        </Modal>
        <Burger ingredients={ this.state.ingredients }></Burger>
        <BuildControls
          ingredientAdded = { this.addIngredientHandler }
          ingredientDeleted = { this.deleteIngredientHandle }
          disabled = { disabledInfo }
          purchasable = { this.state.purchasable }
          totalPrice = { this.state.totalPrice }
          ordered = { this.purchaseHandler }
        >
        </BuildControls>
        <div>Build Controls</div>
      </Aux>
    );
  };
};

export default BurgerBuilder;
