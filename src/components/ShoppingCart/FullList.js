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
    Object.keys(localStorage).forEach((key) => this.setState({
      [key]: 1,
      [`${key}_amount`]: JSON.parse(localStorage.getItem(key)).amount,
    }));
  }

  handleClickRemove(e) {
    const { name } = e.target;
    return this.setState((state) => ({ [name]: state[name] - 1 }));
  }

  handleClickAdd(e) {
    const { name } = e.target;
    const amountAvaiable = this.state[`${name}_amount`];
    const actualAmount = this.state[name];
    if (actualAmount === amountAvaiable) return e.target.disable = true;
    return this.setState((state) => ({ [name]: state[name] + 1 }));
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
                state={this.state}
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
