import React from 'react';
import * as api from '../../services/api';
import Image from '../cardComponents/Image';
import FormAvaliation from './FormAvaliation';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const { match } = this.props;
    api
      .getProductsFromCategoryAndQuery(match.params.id, match.params.id2)
      .then((data) => {
        this.setState({ data: data.results[0] });
      });
  }

  render() {
    const { data } = this.state;
    const { addProductCart } = this.props;
    const object = {
      [data.id]: 1,
      id: data.id,
      thumbnail: data.thumbnail,
      title: data.title,
      price: data.price,
      amount: data.available_quantity,
    };
    return (
      <React.Fragment>
        <h2 data-testid="product-detail-name">{data.title}</h2>
        <p>{data.price}</p>
        <Image src={data.thumbnail} alt={data.title} />
        <FormAvaliation
          obj={object}
          data={data}
          addProductCart={addProductCart}
        />
      </React.Fragment>
    );
  }
}

export default ProductDetails;
