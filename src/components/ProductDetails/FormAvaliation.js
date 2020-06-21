import React, { Component } from 'react';
import ReactStars from 'react-stars';
import Button from '../cardComponents/Button';
import Input from '../cardComponents/Input';
import './FormAvaliation.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 1 };
  }

  moreProductsInCar() {
    this.setState((state) => ({ amount: state.amount + 1 }));
  }

  lessProductsIncar() {
    const { amount } = this.state;
    if (amount > 1) {
      this.setState((state) => ({ amount: state.amount - 1 }));
    }
  }

  render() {
    const { amount } = this.state;
    const { addProductCart, obj } = this.props;
    return (
      <div>
        <div className="addItensCar">
          <h3>Quantidade:</h3>
          <Button cName="MoreOrLess" onClick={() => this.lessProductsIncar()}>-</Button>
          <div>{amount}</div>
          <Button cName="MoreOrLess" onClick={() => this.moreProductsInCar()}>+</Button>
          <Button
            test="product-detail-add-to-cart"
            cName="addToCar"
            onClick={() => addProductCart(obj)}
          >
            Adicionar ao carrinho
          </Button>
        </div>
        <form>
          <h3>Avaliações</h3>
          <div className="inLineForm">
            <Input type="text" placeholder="Email" />
          </div>
          <ReactStars count={5} size={32} color2={'#ffd700'} />
          <textarea data-testid="product-detail-evaluation" placeholder="Mensagem(opcional)" />
          <Button>Avaliar</Button>
        </form>
      </div>
    );
  }
}

export default Forms;
