import React from 'react';
import Aside from './Aside/Aside';
import ProductList from './Product List-Card/ProductList';
import './mainContent.css';

class MainContent extends React.Component {
  render() {
    const { handleClick, query, productsData, addProductCart } = this.props;
    return (
      <div className="row">
        <div className="asideDiv">
          <Aside handleClick={handleClick} />
        </div>
        <div className="listDiv">
          <ProductList
            productsData={productsData}
            query={query}
            addProductCart={addProductCart}
          />
        </div>
      </div>
    );
  }
}

export default MainContent;
