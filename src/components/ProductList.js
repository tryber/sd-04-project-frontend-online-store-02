import React from 'react';
import ProductCard from './ProductCard';
import NotFound from './NotFound';
import LandingPage from './LandingPage';

class ProductList extends React.Component {
  render() {
    const { productsData, query } = this.props;
    if (!query) return <LandingPage />;
    if (!productsData || productsData.length === 0) return <NotFound />;
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
