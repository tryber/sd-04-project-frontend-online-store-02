import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      {/* ProductList tem que receber os dados via props "productsData" */}
      <ProductList />
    </div>
  );
}

export default App;
