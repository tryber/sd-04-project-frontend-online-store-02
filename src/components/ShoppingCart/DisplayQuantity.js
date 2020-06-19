import React from 'react';

class DisplayQuantity extends React.Component {
  render() {
    const { quantity, name } = this.props;
    if (quantity) return <div data-testid="shopping-cart-product-quantity">{quantity[name]}</div>;
    return <div data-testid="shopping-cart-product-quantity">1</div>;
  }
}

export default DisplayQuantity;
