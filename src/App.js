import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Aside from './components/Aside/Index';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';

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
        <Header />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/details/:id"
              render={(props) => <ProductDetails {...props} />}
            />
            <Route exact path="/">
              {/* ProductList tem que receber os dados via props "productsData" */}
              <ProductList query={query} />
            </Route>
          </Switch>
        </BrowserRouter>
        <Aside click={this.click} />
      </div>
    );
  }
}

export default App;
