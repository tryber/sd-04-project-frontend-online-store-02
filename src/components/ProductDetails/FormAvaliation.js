import React, { Component } from 'react';
import Button from '../cardComponents/Button';
import Input from '../cardComponents/Input';
import './FormAvaliation.css';
import Select from '../cardComponents/Select';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 1 };
  }

  moreProductsInCar() {
    this.setState((state) => ({ amount: state.amount + 1 }));
  }

  lessProductsIncar() {
    if (this.state.amount > 1) {
      this.setState((state) => ({ amount: state.amount - 1 }));
    }
  }

  render() {
    const { amount } = this.state;
    const { addItemCar } = this.props;
    return (
      <div>
        <div className="addItensCar">
          <h3>Quantidade:</h3>
          <Button cName="MoreOrLess" onClick={() => this.lessProductsIncar()}>-</Button>
          <div>{amount}</div>
          <Button cName="MoreOrLess" onClick={() => this.moreProductsInCar()}>+</Button>
          <div data-testid="product-add-to-cart">
            <Button test="product-add-to-cart" cName="addToCar" onClick={() => addItemCar(amount)}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
        <form>
          <h3>Avaliações</h3>
          <div className="inLineForm">
            <Input type="text" placeholder="Email" />
            <Select />
          </div>
          <textarea placeholder="Mensagem(opcional)" />
          <Button>Avaliar</Button>
        </form>
      </div>
    );
  }
}

export default Forms;
