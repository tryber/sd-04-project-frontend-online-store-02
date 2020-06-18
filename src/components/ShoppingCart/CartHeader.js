import React from 'react';
import './ShoppingCart.css';
import Image from '../cardComponents/Image';

class CartHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="arrow">
          <Image
            src="https://www.clipartmax.com/png/middle/221-2214080_back-arrow-vector-go-back-icon.png"
            alt="back arrow icon"
          />
        </div>
        <div data-testid="shopping-cart-button" className="shoppingCart">
          <Image
            src="data:image/png;base64,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"
            alt="cart shopping icon"
          />
          <p>Carrinho de Compras</p>
        </div>
      </div>
    );
  }
}

export default CartHeader;
