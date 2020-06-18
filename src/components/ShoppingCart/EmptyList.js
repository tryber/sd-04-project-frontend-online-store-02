import React from 'react';
import Image from '../cardComponents/Image';
import './ShoppingCart.css';
import CartHeader from './CartHeader';

class EmptyList extends React.Component {
  render() {
    return (
      <div>
        <CartHeader />
        <div className="emptyBox">
          <Image
            src="https://cdn4.iconfinder.com/data/icons/shipping-and-postage/128/12-512.png"
            alt="empty box icon"
          />
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default EmptyList;
