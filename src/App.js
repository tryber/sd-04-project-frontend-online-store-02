import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import To from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MainContent from './components/MainContent/MainContent';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import * as api from './services/api';
import Checkout from './components/Checkout/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: false, data: [], input: '', productsCart: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addProductCart = this.addProductCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const arr = [];
    const keys = Object.keys(localStorage);
    keys.forEach((key) => arr.push(JSON.parse(localStorage.getItem(key))));
    this.setState({ productsCart: arr });
  }

  handleClick(categoryId = '$CATEGORY_ID', query = '$QUERY') {
    api
      .getProductsFromCategoryAndQuery(categoryId, query)
      .then((data) => this.setState({ data, query: true }));
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  addProductCart(object) {
    localStorage.setItem(object.id, JSON.stringify(object));
    this.getCartItems();
  }

  render() {
    const { query, data, input, productsCart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <To inputValue={input} handleChange={this.handleChange} handleClick={this.handleClick} />
          <Switch>
            <Route exact path="/cart">
              <ShoppingCart productsCart={productsCart} />
            </Route>
            <Route
              path="/details/:id/:id2"
              render={
                (props) => <ProductDetails {...props} addProductCart={this.addProductCart} />
              }
            />
            <Route exact path="/">
              <MainContent
                handleClick={this.handleClick}
                productsData={data.results}
                addProductCart={this.addProductCart}
                query={query}
              />
            </Route>
            <Route exact path="/checkout"><Checkout /></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
