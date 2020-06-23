import React from 'react';
import * as api from '../../services/api';
import Image from '../cardComponents/Image';
import FormAvaliation from './FormAvaliation';
import FreeShipping from '../MainContent/Product List-Card/FreeShipping';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], verify: false, price: '' };
  }

  componentDidMount() {
    const { match } = this.props;
    api.getProductsFromCategoryAndQuery(match.params.id, match.params.id2).then((data) => {
      this.setState({
        data: data.results[0],
        verify: data.results[0].shipping.free_shipping,
        price: Number(data.results[0].price).toFixed(2),
      });
    });
  }

  render() {
    const { data, verify: bollean, price } = this.state;
    const { addProductCart } = this.props;
    const object = {
      quantity: 1,
      id: data.id,
      thumbnail: data.thumbnail,
      title: data.title,
      price: data.price,
    };
    return (
      <React.Fragment>
        <div className="product-detail">
          <h2 data-testid="product-detail-name">{data.title}</h2>
          <p>{price}</p>
          <Image className="imagem-produto" src={data.thumbnail} alt={data.title} />
          <FreeShipping verify={bollean} />
          <FormAvaliation obj={object} data={data} addProductCart={addProductCart} />
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
