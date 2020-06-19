import React from 'react';
import { Link } from 'react-router-dom';
import EmptyList from './EmptyList';
import FullList from './FullList';
import Button from '../cardComponents/Button';

class ShoppingCart extends React.Component {
  render() {
    const { productsCart } = this.props;
    if (!productsCart || productsCart.length === 0) return <EmptyList />;
    return (
      <div>
        <FullList productsCart={productsCart} />
        <Link to="/checkout">
          <Button test="checkout-products" type="button">
            Comprar
          </Button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
