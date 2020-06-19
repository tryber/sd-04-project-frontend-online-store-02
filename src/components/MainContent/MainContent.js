import React from 'react';
import { Link } from 'react-router-dom';
import Aside from './Aside/Aside';
import ProductList from './Product List-Card/ProductList';
import './mainContent.css';
import Button from '../cardComponents/Button';

class MainContent extends React.Component {
  render() {
    const { handleClick, query, productsData, addProductCart } = this.props;
    return (
      <div className="row">
        <Aside handleClick={handleClick} />
        <ProductList
          productsData={productsData}
          query={query}
          addProductCart={addProductCart}
        />

      </div>
    );
  }
}

export default MainContent;
