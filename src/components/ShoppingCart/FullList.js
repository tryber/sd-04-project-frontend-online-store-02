import React from 'react';
import './ShoppingCart.css';
import CartHeader from './CartHeader';

class FullList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCart: [],
    };
  }

  render() {
    const { productsCart } = this.props;
    return (
      <div>
        <CartHeader />
        <div>
          {productsCart.map((product) => (
            <>
              <div data-testid="shopping-cart-product-name">{product.title}</div>
              <div data-testid="shopping-cart-product-quantity">1</div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default FullList;
