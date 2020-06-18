import React from 'react';
import Input from '../cardComponents/Input';
import Button from '../cardComponents/Button';
import Image from '../cardComponents/Image';
import CartButton from '../cartButton/CartButton';
import './Header.css';

export default class Header extends React.Component {
  render() {
    const { inputValue } = this.props;
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
            value={inputValue}
            test="query-input"
            placeholder="Digite aqui sua pesquisa"
          />
          <Button test="query-button">Pesquisar</Button>
          <CartButton />
        </div>
      </header>
    );
  }
}
