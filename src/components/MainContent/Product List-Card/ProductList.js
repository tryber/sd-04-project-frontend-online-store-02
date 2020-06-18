import React from 'react';
import ProductCard from './ProductCard';
import NotFound from './NotFound';
import LandingPage from './LandingPage';
import './ProductList.css';

class ProductList extends React.Component {
  render() {
    const { productsData, query } = this.props;
    if (!query) return <LandingPage />;
    if (productsData.length === 0) return <NotFound />;
    return (
      <div>
        {productsData.map((eachProductData) => (
          <ProductCard key={eachProductData.id} productData={eachProductData} />
        ))}
      </div>
    );
  }
}

export default ProductList;
