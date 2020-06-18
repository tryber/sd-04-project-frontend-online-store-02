import React from 'react';
import Image from '../cardComponents/Image';
import './CartButton.css';

class CartButton extends React.Component {
  render() {
    return (
      <div className="image" data-testid="shopping-cart-button">
        <Image
          src="https://image.flaticon.com/icons/svg/57/57629.svg"
          alt="cart shopping icon"
        />
      </div>
    );
  }
}

export default CartButton;
