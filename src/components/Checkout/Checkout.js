import React, { Component } from 'react';
import Input from '../cardComponents/Input';

class Checkout extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fullName">Nome Completo</label>
          <Input type="text" name="fullName" test="checkout-fullname" />
          <label htmlFor="email">Email</label>
          <Input type="text" name="email" test="checkout-email" />
          <label htmlFor="cpf">CPF</label>
          <Input type="text" name="cpf" test="checkout-cpf" />
          <label htmlFor="telefone">Telefone</label>
          <Input type="text" name="telefone" test="checkout-phone" />
          <label htmlFor="cep">CEP</label>
          <Input type="text" name="cep" test="checkout-cep" />
          <label htmlFor="address">CPF</label>
          <Input type="text" name="address" test="checkout-address" />
        </form>
      </div>
    );
  }
}

export default Checkout;
