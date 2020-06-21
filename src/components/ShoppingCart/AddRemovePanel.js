import React from 'react';
import Button from '../cardComponents/Button';
import DisplayQuantity from './DisplayQuantity';

class AddRemovePanel extends React.Component {
  render() {
    const { state, onClickRemove, onClickAdd, name } = this.props;
    return (
      <div>
        <DisplayQuantity state={state} name={name} />
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
