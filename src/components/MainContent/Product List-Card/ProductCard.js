import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../cardComponents/Image';
import Title from '../../cardComponents/Title';
import Price from '../../cardComponents/Price';
import Button from '../../cardComponents/Button';
import FreeShipping from './FreeShipping';

class ProductCard extends React.Component {
  render() {
    const { productData, addProductCart } = this.props;
    const object = {
      [productData.id]: 1,
      id: productData.id,
      thumbnail: productData.thumbnail,
      title: productData.title,
      price: productData.price,
      amount: productData.available_quantity,
    };

    return (
      <div data-testid="product">
        <Image src={productData.thumbnail} alt={productData.title} />
        <Title name={productData.title} />
        <Price value={productData.price} />
        <FreeShipping verify={productData.shipping.free_shipping} />
        <Button onClick={() => addProductCart(object)} test="product-add-to-cart">
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
