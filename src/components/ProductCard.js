import React from 'react';
import { Link } from 'react-router-dom';
import Image from './cardComponents/Image';
import Title from './cardComponents/Title';
import Price from './cardComponents/Price';

class ProductCard extends React.Component {
  render() {
    const { productData } = this.props;
    return (
      <div data-testid="product">
        <Image src={productData.thumbnail} alt={productData.title} />
        <Title name={productData.title} />
        <Price value={productData.price} />
        <div data-testid="product-detail-link">
          <Link to={`/details/${productData.id}`}>DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default ProductCard;
