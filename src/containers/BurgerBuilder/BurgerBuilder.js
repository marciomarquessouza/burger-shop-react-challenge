import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Buildcontrols/BuildControls';

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
    }
  };
  render() {
    return(
      <Aux>
        <Burger ingredients={ this.state.ingredients }></Burger>
        <BuildControls ></BuildControls>
        <div>Build Controls</div>
      </Aux>
    );
  };
};

export default BurgerBuilder;
