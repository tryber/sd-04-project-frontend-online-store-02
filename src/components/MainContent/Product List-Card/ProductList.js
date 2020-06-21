import React from 'react';
import ProductCard from './ProductCard';
import NotFound from './NotFound';
import LandingPage from './LandingPage';
import './ProductList.css';

class ProductList extends React.Component {
  render() {
    const { productsData, query, addProductCart } = this.props;
    if (!query) return <LandingPage />;
    if (!productsData || productsData.length === 0) return <NotFound />;
    return (
      <div className="productList">
        {productsData.map((eachProductData) => (
          <ProductCard
            key={eachProductData.id}
            productData={eachProductData}
            addProductCart={addProductCart}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
