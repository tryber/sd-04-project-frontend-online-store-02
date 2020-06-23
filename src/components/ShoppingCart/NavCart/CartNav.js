import React from 'react';

import NavCartCard from './NavCartCard';

export default class CartNav extends React.Component {
  render() {
    const { productsCart } = this.props;
    return (
      <div className="nav-bar">
        <div className="cart false">
          <h1>Seu carrinho </h1>
          <div>
            {productsCart.map((product) => (
              <div key={product.id}>
                <NavCartCard
                  name={product.id}
                  productData={product}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
