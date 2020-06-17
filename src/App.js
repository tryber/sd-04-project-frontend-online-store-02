import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      {/* ProductList tem que receber os dados via props "productsData" */}
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
