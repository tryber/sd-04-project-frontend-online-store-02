import React from 'react';

class DisplayQuantity extends React.Component {
  render() {
    const { state, name } = this.props;
    if (state) return <div data-testid="shopping-cart-product-quantity">{state[name]}</div>;
    return <div data-testid="shopping-cart-product-quantity">1</div>;
  }
}

export default DisplayQuantity;
