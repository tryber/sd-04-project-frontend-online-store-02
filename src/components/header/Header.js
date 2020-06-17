import React from 'react';
import Input from '../cardComponents/input';
import Button from '../cardComponents/button';
import Image from '../cardComponents/Image';
import './Header.css';

export default class Header extends React.Component {
  render() {
    const { count, inputValue } = this.props;
    return (
      <header>
        <Image
          src="https://logodownload.org/wp-content/uploads/2016/08/Mercado-Livre-logo.png"
          alt="logo mercado livre"
        />
        <div>
          <Input type="text" value={inputValue} test="query-input" />
          <Button text="Pesquisar" test="query-button" />
        </div>
      </header>
    );
  }
}
