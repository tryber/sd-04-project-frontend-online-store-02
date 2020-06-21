import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, test, onClick, cName, name, isDisable } = this.props;
    return (
      <button
        disabled={isDisable}
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

Button.defaultProps = {
  isDisable: false,
}

export default Button;
