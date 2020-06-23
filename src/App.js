import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import H from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MainContent from './components/MainContent/MainContent';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import * as api from './services/api';
import Checkout from './components/Checkout/Checkout';
import CartNav from './components/ShoppingCart/NavCart/CartNav';
import ProductCard from './components/MainContent/Product List-Card/ProductCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: false, data: [], input: '', productsCart: [], classN: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addProductCart = this.addProductCart.bind(this);
  }

  componentDidMount() {
    this.setCartItems();
  }

  setCartItems() {
    const arr = Object.keys(localStorage).map((elem) => JSON.parse(localStorage.getItem(elem)));
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
    if (localStorage.getItem(object.id)) {
      const newObj = JSON.parse(localStorage.getItem(object.id));
      newObj.quantity += 1;
      localStorage.setItem(newObj.id, JSON.stringify(newObj));
    } else localStorage.setItem(object.id, JSON.stringify(object));
    this.setCartItems();
    this.setState({ classN: 'enphasys' });
    setTimeout(() => {
      this.setState({ classN: '' });
    }, 1000);
  }

  render() {
    const { query, data, input, productsCart, classN } = this.state;
    return (
      <BrowserRouter>
        <H i={input} h={this.handleChange} c={this.handleClick} it={productsCart} s={classN} />
        <CartNav productsCart={productsCart} />
        <Switch>
          <Route exact path="/cart">
            <ShoppingCart productsCart={productsCart} />
          </Route>
          <Route
            path="/details/:id/:id2"
            render={(props) => <ProductDetails {...props} addProductCart={this.addProductCart} />}
          />
          <Route exact path="/">
            <MainContent
              handleClick={this.handleClick}
              productsData={data.results}
              addProductCart={this.addProductCart}
              query={query}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
