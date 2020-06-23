import React from 'react';
import './ShoppingCart.css';
import CartHeader from './CartHeader';
import CartCard from './CartCard';

class FullList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickRemove = this.handleClickRemove.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  componentDidMount() {
    this.setQuantitiesIDs();
  }

  setQuantitiesIDs() {
    const { productsCart } = this.props;
    productsCart.forEach((key) => this.setState({ [key.id]: key.quantity }));
    // const arr = Object.keys(localStorage).map((elem) => JSON.parse(localStorage.getItem(elem)));
  }

  handleClickRemove(e) {
    const { name } = e.target;
    const newObj = JSON.parse(localStorage.getItem(name));
    newObj.quantity -= 1;
    localStorage.setItem(newObj.id, JSON.stringify(newObj));
    this.setState((state) => ({ [name]: state[name] - 1 }));
  }

  handleClickAdd(e) {
    const { name } = e.target;
    const newObj = JSON.parse(localStorage.getItem(name));
    newObj.quantity += 1;
    localStorage.setItem(newObj.id, JSON.stringify(newObj));
    this.setState((state) => ({ [name]: state[name] + 1 }));
  }

  render() {
    const { productsCart } = this.props;
    return (
      <div>
        <CartHeader />
        <div>
          {productsCart.map((product) => (
            <div key={product.id}>
              <CartCard
                quantity={this.state}
                name={product.id}
                onClickRemove={this.handleClickRemove}
                onClickAdd={this.handleClickAdd}
                productData={product}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FullList;
