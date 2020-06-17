import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Aside from './components/Aside';
import Header from './components/header/Header';

class App extends Component {
  // click() {}
  render() {
    return (
      <div className="App">
        {/* ProductList tem que receber os dados via props "productsData" */}
        <Header />
        <ProductList />
        <Aside click={this.click} />
      </div>
    );
  }
}

export default App;
