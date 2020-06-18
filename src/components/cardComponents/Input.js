import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, value, test, placeholder } = this.props;
    return (
      <input
        type={type}
        data-testid={test}
        value={value}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
