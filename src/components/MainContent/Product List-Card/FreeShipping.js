import React, { Component } from 'react';
import './FreeShipping.css';

class FreeShipping extends Component {
  render() {
    const { verify } = this.props;
    if (verify) {
      return (
        <img
          className="frete-gratis"
          data-testid="free-shipping"
          src="https://lojaminasnutri.com.br/content/uploads/2019/05/image-2.png"
          alt="Frete-gratis"
        />
      );
    }
    return <div />;
  }
}

export default FreeShipping;
