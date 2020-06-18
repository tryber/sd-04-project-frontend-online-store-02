import React, { Component } from 'react';
import './style.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { quantidade: 1, nota: 0 };
  }

  moreProductsInCar() {
    this.setState((state) => ({ quantidade: state.quantidade + 1 }));
  }

  lessProductsIncar() {
    if (this.state.quantidade > 1) {
      this.setState((state) => ({ quantidade: state.quantidade - 1 }));
    }
  }

  render() {
    const { quantidade } = this.state;
    const { addItemCar } = this.props;
    return (
      <div>
        <div className="addItensCar">
          <h3>Quantidade:</h3>
          <button className="MoreOrLess" onClick={() => this.lessProductsIncar()}>-</button>
          <div>{quantidade}</div>
          <button className="MoreOrLess" onClick={() => this.moreProductsInCar()}>+</button>
          <button className="addToCar" onClick={() => addItemCar(quantidade)}>
            Adicionar ao carrinho
          </button>
        </div>
        <form>
          <h3>Avaliações</h3>
          <div className="inLineForm">
            <input type="text" placeholder="Email"></input>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <textarea placeholder="Mensagem(opcional)"></textarea>
          <button>Avaliar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
