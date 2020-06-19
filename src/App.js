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
    this.state = { query: false, data: [], input: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(categoryId = '$CATEGORY_ID', query = '$QUERY') {
    api
      .getProductsFromCategoryAndQuery(categoryId, query)
      .then((data) => this.setState({ data, query: true }));
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { query, data, input } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Header
            inputValue={input}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
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
