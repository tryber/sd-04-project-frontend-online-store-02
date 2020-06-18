import React from 'react';
import * as api from '../../services/api';
import Image from '../cardComponents/Image';
import FormAvaliation from './FormAvaliation';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    const { match } = this.props;
    api.getItems(match.params.id).then((data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div data-testid="product-detail-name">
        <h2>{data.title}</h2>
        <p>{data.price}</p>
        <Image src={data.thumbnail} alt={data.title} />
        <FormAvaliation />
      </div>
    );
  }
}

export default ProductDetails;
