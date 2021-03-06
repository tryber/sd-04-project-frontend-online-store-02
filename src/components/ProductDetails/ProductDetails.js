import React from 'react';
import * as api from '../../services/api';
import Image from '../cardComponents/Image';
import FormAvaliation from './FormAvaliation';
import FreeShipping from '../MainContent/Product List-Card/FreeShipping';
import TechnicalAttributes from './TechnicalAttributes';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], verify: false, price: '' };
  }

  componentDidMount() {
    const { match } = this.props;
    api
      .getProductsFromCategoryAndQuery(match.params.id, match.params.id2)
      .then((data) => {
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
      available: data.available_quantity,
      quantity: 1,
      id: data.id,
      thumbnail: data.thumbnail,
      title: data.title,
      price: data.price,
    };
    return (
      <div className="alignCenter">
        <div className="row">
          <div className="productDetail">
            <h2 data-testid="product-detail-name">{data.title}</h2>
            <Image src={data.thumbnail} alt={data.title} />
            <div className="price">
              <p>R${price}</p>
              <FreeShipping verify={bollean} />
            </div>
          </div>
          <div className="productDetail">
            <TechnicalAttributes data={data} />
          </div>
        </div>
        <FormAvaliation obj={object} data={data} addProductCart={addProductCart} />
      </div>
    );
  }
}

export default ProductDetails;
