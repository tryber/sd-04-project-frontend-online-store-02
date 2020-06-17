import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Aside from './components/Aside';
import Header from './components/header/Header';

import FormAvaliation from './components/FormAvaliation'

class App extends Component {
  // click() {}
  render() {
    return (
      <div className="App">
        {/* ProductList tem que receber os dados via props "productsData" */}
        <Header />
        <ProductList />
        <Aside click={this.click} />
        <FormAvaliation />
      </div>
    );
  }
}

export default App;
