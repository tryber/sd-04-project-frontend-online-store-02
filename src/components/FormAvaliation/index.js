import React, { Component } from 'react';
import Button from '../cardComponents/button';
import Input from '../cardComponents/input';
import './style.css';

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
          <Button className="MoreOrLess" onClick={() => this.lessProductsIncar()}>-</Button>
          <div>{amount}</div>
          <Button className="MoreOrLess" onClick={() => this.moreProductsInCar()}>+</Button>
          <Button className="addToCar" onClick={() => addItemCar(amount)}>
            Adicionar ao carrinho
          </Button>
        </div>
        <form>
          <h3>Avaliações</h3>
          <div className="inLineForm">
            <Input type="text" placeholder="Email" />
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <textarea placeholder="Mensagem(opcional)" />
          <Button>Avaliar</Button>
        </form>
      </div>
    );
  }
}

export default Forms;
