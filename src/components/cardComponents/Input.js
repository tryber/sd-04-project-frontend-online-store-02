import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, value, test, placeholder, onChange } = this.props;
    return (
      <input
        onChange={onChange}
        type={type}
        data-testid={test}
        value={value}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
