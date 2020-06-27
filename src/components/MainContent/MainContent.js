import React from 'react';
import Aside from './Aside/Aside';
import ProductList from './Product List-Card/ProductList';
import Button from '../cardComponents/Button';
import './mainContent.css';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  sortValue() {
    const { productsData } = this.props;
    const orderValue = productsData.sort((a, b) => a.price - b.price);
    this.setState({ data: orderValue });
  }

  render() {
    const { handleClick, query, productsData, addProductCart } = this.props;
    const { data } = this.state;
    return (
      <div className="main-row">
        <div className="asideDiv">
          <Aside handleClick={handleClick} />
        </div>
        <Button onClick={() => this.sortValue()}>Ordenar por valor</Button>
        <div className="listDiv">
          <ProductList
            productsData={productsData || data}
            query={query}
            addProductCart={addProductCart}
          />
        </div>
      </div>
    );
  }
}

export default MainContent;
