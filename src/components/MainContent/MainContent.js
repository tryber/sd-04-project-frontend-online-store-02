import React from 'react';
import Aside from './Aside/Aside';
import ProductList from './Product List-Card/ProductList';
import './mainContent.css';

class MainContent extends React.Component {
  render() {
    const { handleClick, query, productsData } = this.props;
    return (
      <div className="row">
        <Aside click={handleClick} />
        <ProductList productsData={productsData} query={query} />
      </div>
    );
  }
}

export default MainContent;
