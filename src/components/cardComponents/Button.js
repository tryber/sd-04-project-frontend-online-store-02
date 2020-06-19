import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, test, onClick, cName, name } = this.props;
    return (
      <button
        name={name}
        className={cName}
        onClick={onClick}
        data-testid={test}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export default Button;
