import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: false };
  }
  // handleClick() {}

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
              <MainContent query={query} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
