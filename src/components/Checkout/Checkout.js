import React, { Component } from 'react';
import Input from '../cardComponents/Input';

class Checkout extends Component {
  render() {
    return (
      <div>
        <form>
          <label for="fullName">Nome Completo</label>
          <Input type="text" name="fullName" test="checkout-fullname" />
          <label for='email'>Email</label>
          <Input type='text' name='email' test='checkout-email' />
          <label for='cpf'>CPF</label> 
          <Input type='text' name='cpf' test='checkout-cpf' />
          <label for='telefone'>Telefone</label> 
          <Input type='text' name='telefone' test='checkout-phone' />
          <label for='cep'>CEP</label> 
          <Input type='text' name='cep' test='checkout-cep' />
          <label for='address'>CPF</label> 
          <Input type='text' name='address' test='checkout-address' />
        </form>
      </div>
    );
  }
}

export default Checkout;
