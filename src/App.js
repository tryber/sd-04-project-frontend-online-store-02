import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Aside from './components/Aside';
import Header from './components/header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: false };
  }
  // click() {}

  render() {
    const { query } = this.state;
    return (
      <div className="App">
        {/* ProductList tem que receber os dados via props "productsData" */}
        <Header />
        <ProductList query={query} />
        <Aside click={this.click} />
      </div>
    );
  }
}

export default App;
