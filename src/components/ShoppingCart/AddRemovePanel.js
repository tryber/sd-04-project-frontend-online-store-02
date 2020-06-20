import React from 'react';
import Button from '../cardComponents/Button';
import DisplayQuantity from './DisplayQuantity';

class AddRemovePanel extends React.Component {
  render() {
    const { quantity, onClickRemove, onClickAdd, name } = this.props;
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
      </div>
    );
  }
}

export default AddRemovePanel;
