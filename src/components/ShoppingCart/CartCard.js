import React from 'react';
import Image from '../cardComponents/Image';
import Title from '../cardComponents/Title';
import Price from '../cardComponents/Price';
import AddRemovePanel from './AddRemovePanel';

class CartCard extends React.Component {
  render() {
    const {
      productData,
      state,
      onClickRemove,
      onClickAdd,
      name,
    } = this.props;
    return (
      <div>
        <Image src={productData.thumbnail} alt={productData.title} />
        <Title test="shopping-cart-product-name" name={productData.title} />
        <Price value={productData.price} />
        <AddRemovePanel
          name={name}
          onClickRemove={onClickRemove}
          onClickAdd={onClickAdd}
          state={state}
        />
      </div>
    );
  }
}

export default CartCard;
