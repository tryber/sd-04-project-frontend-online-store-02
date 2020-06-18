import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MainContent from './components/MainContent/MainContent';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import * as api from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: false, data: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(categoryId) {
    api
      .getProductsFromCategoryAndQuery(categoryId)
      .then((data) => this.setState({ data, query: true }));
  }

  render() {
    const { query, data } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/cart" component={ShoppingCart} />
            <Route
              exact
              path="/details/:id/:id2"
              render={(props) => <ProductDetails {...props} />}
            />
            <Route exact path="/">
              {/* ProductList tem que receber os dados via props "productsData" */}
              <MainContent
                handleClick={this.handleClick}
                productsData={data.results}
                query={query}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
