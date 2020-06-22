import React, { Component } from 'react';
import Image from '../../cardComponents/Image';
import './FreeShipping.css';

class FreeShipping extends Component {
  render() {
    const { verify } = this.props;
    if (verify) {
      return (
        <Image
          className="frete-gratis"
          test="free-shipping"
          src="https://lojaminasnutri.com.br/content/uploads/2019/05/image-2.png"
          alt="Frete-gratis"
        />
      );
    }
    return <div />;
  }
}

export default FreeShipping;
