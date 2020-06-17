import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartButton from './components/cartButton/CartButton';

function App() {
  return (
    <div className="App">
      {/* ProductList tem que receber os dados via props "productsData" */}
      <ProductList />
      <CartButton />
    </div>
  );
}

export default App;
