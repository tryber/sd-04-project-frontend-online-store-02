import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, test, onClick, cName } = this.props;
    return (
      <button
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
