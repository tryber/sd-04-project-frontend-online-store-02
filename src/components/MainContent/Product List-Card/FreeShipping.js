import React, { Component } from 'react';

class FreeShipping extends Component {
  render() {
    const { verify } = this.props;
    if (verify) {
      return <div data-testid="free-shipping">Alô meu povo, frete de graça!</div>;
    }
    return <div />;
  }
}

export default FreeShipping;
