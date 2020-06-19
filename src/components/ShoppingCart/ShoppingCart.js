import React from 'react';
import EmptyList from './EmptyList';
import FullList from './FullList';

class ShoppingCart extends React.Component {
  render() {
    const { productsCart } = this.props;
    if (productsCart.length === 0) return <EmptyList />;
    return (
      <div>
        <FullList productsCart={productsCart} />
      </div>
    );
  }
}

export default ShoppingCart;
