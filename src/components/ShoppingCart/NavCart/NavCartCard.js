import React from 'react';
import Image from '../../cardComponents/Image';
import Title from '../../cardComponents/Title';
import Price from '../../cardComponents/Price';

export default class NavCartCard extends React.Component {
  render() {
    const { productData } = this.props;
    return (
      <div className="cart-card">
        <Image src={productData.thumbnail} alt={productData.title} />
        <Title name={productData.title} />
        <Price value={productData.price} />
      </div>
    );
  }
}
