import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../cardComponents/Input';
import Button from '../cardComponents/Button';
import Image from '../cardComponents/Image';
import CartButton from '../ShoppingCart/CartButton';
import './Header.css';

export default class Header extends React.Component {
  constructor() {
    super();
    this.a = 'Mostrou';
    this.b = 'Escondeu';
    this.hoverCart = this.hoverCart.bind(this);
    this.noHover = this.noHover.bind(this);
  }

  hoverCart() {
    const navBar = document.querySelector('.cart');
    navBar.className = 'cart true';
    this.a = this.b;
  }

  noHover() {
    const navBar = document.querySelector('.cart');
    navBar.className = 'cart false';
    this.a = this.b;
  }

  render() {
    const { h, c, i, it, s } = this.props;
    return (
      <header>
        <div className="row">
          <Image
            src="https://img.icons8.com/color/48/000000/house-lannister.png"
            alt="logo beasts"
          />
          <h1>Fera Peluda</h1>
        </div>
        <div className="row">
          <Input
            type="text"
            onChange={h}
            test="query-input"
            placeholder="Digite aqui sua pesquisa"
          />
          <Button onClick={() => c(undefined, i)} test="query-button">Pesquisar</Button>
          <Link to="/cart">
            <CartButton
              items={it}
              classN={s}
              mouseOver={this.hoverCart}
              mouseOut={this.noHover}
            />
          </Link>
        </div>
      </header>
    );
  }
}
// teste
