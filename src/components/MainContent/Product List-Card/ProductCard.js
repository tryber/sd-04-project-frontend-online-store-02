import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../cardComponents/Image';
import Title from '../../cardComponents/Title';
import Price from '../../cardComponents/Price';

class ProductCard extends React.Component {
  render() {
    const { productData } = this.props;
    return (
      <div data-testid="product">
        <Image src={productData.thumbnail} alt={productData.title} />
        <Title name={productData.title} />
        <Price value={productData.price} />
        <Link
          data-testid="product-detail-link"
          to={`/details/${productData.id}/${productData.title}`}
        >
          DETALHES
        </Link>
      </div>
    );
  }
}

export default ProductCard;
