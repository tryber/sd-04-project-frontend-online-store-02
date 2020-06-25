import React from 'react';
import Image from '../cardComponents/Image';
import './CartButton.css';

class CartButton extends React.Component {
  render() {
    const { items, classN } = this.props;
    return (
      <div>
        <span data-testid="shopping-cart-size" className={classN}>
          {items.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
        <div className="image" data-testid="shopping-cart-button">
          <Image
            src="https://image.flaticon.com/icons/svg/57/57629.svg"
            alt="cart shopping icon"
          />
        </div>
      </div>
    );
  }
}

export default CartButton;
