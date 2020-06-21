import React from 'react';
import * as api from '../../services/api';
import Image from '../cardComponents/Image';
import FormAvaliation from './FormAvaliation';
import FreeShipping from '../MainContent/Product List-Card/FreeShipping';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], bollean: false };
  }

  componentDidMount() {
    const { match } = this.props;
    api.getProductsFromCategoryAndQuery(match.params.id, match.params.id2).then((data) => {
      this.setState({ data: data.results[0], bollean: data.results[0].shipping.free_shipping });
    });
  }

  render() {
    const { data, bollean } = this.state;
    console.log(bollean);
    const { addProductCart } = this.props;
    const object = {
      [data.id]: 1,
      id: data.id,
      thumbnail: data.thumbnail,
      title: data.title,
      price: data.price,
    };
    return (
      <React.Fragment>
        <h2 data-testid="product-detail-name">{data.title}</h2>
        <p>{data.price}</p>
        <Image src={data.thumbnail} alt={data.title} />
        <FreeShipping verify={bollean} />
        <FormAvaliation obj={object} data={data} addProductCart={addProductCart} />
      </React.Fragment>
    );
  }
}

export default ProductDetails;
