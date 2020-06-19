import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../cardComponents/Image';
import Title from '../../cardComponents/Title';
import Price from '../../cardComponents/Price';
import Button from '../../cardComponents/Button';

class ProductCard extends React.Component {
  render() {
    const { productData, addProductCart } = this.props;
    const object = { title: productData.title };
    return (
      <div data-testid="product">
        <Image src={productData.thumbnail} alt={productData.title} />
        <Title name={productData.title} />
        <Price value={productData.price} />
        <Button onClick={() => addProductCart(object)} test={'product-add-to-cart'}>
          Adicionar ao carrinho
        </Button>
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
