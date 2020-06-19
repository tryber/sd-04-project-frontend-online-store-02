import React from 'react';
import Button from '../cardComponents/Button';
import DisplayQuantity from './DisplayQuantity';

class AddRemovePanel extends React.Component {
  render() {
    const { quantity, onClickRemove, onClickAdd, name } = this.props;
    if (quantity) console.log(quantity);
    return (
      <div>
        <DisplayQuantity quantity={quantity} name={name} />
        <Button
          onClick={onClickRemove}
          test="product-decrease-quantity"
          name={name}
        >
          -
        </Button>
        <Button
          onClick={onClickAdd}
          test="product-increase-quantity"
          name={name}
        >
          +
        </Button>
        {/* <Image
          onClick={onClick}
          test="product-decrease-quantity"
          src="https://cdn1.iconfinder.com/data/icons/material-core/20/remove-circle-outline-128.png"
          alt="remove"
        /> */}
        {/* <Image
          onClick={onClick}
          test="product-increase-quantity"
          src="https://cdn1.iconfinder.com/data/icons/material-core/20/add-circle-outline-128.png"
          alt="add"
        /> */}
      </div>
    );
  }
}

export default AddRemovePanel;
