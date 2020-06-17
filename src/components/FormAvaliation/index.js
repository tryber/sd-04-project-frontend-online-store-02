import React, { Component } from 'react';

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
    return (
      <div>
        <h3>Quantidade</h3>
        <button onClick={() => this.lessProductsIncar()}>-</button>
        <div>{quantidade}</div>
        <button onClick={() => this.moreProductsInCar()}>+</button>
        <button>Adicionar ao carrinho</button>
        <h3>Avaliações</h3>
        <form>
        <input type="text" placeholder="Email"></input>
        <input type="text-area" placeholder="Mensagem(opcional)"></input>
        <button>Avaliar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
