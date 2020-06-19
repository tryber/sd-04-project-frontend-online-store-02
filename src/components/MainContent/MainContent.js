import React from 'react';
import Aside from './Aside/Aside';
import ProductList from './Product List-Card/ProductList';
import './mainContent.css';

class MainContent extends React.Component {
  render() {
    const { handleClick, query, productsData, addProductCart } = this.props;
    return (
      <div className="row">
        <Aside handleClick={handleClick} />
        <ProductList productsData={productsData} query={query} addProductCart={addProductCart} />
      </div>
    );
  }
}

export default MainContent;
