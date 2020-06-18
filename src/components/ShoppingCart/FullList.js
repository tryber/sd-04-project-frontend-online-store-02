import React from 'react';
import './ShoppingCart.css';
import CartHeader from './CartHeader';

class FullList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <CartHeader />
        <div>{items}</div>
      </div>
    );
  }
}

export default FullList;
