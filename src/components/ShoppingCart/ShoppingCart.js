import React from 'react';
import EmptyList from './EmptyList';
import FullList from './FullList';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;
    if (!cart || cart.length === 0) return <EmptyList />;
    return (
      <div>
        <FullList />
      </div>
    );
  }
}

export default ShoppingCart;
