import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, test, onClick, cName, name, mouseOver, mouseOut } = this.props;
    return (
      <button
        name={name}
        className={cName}
        onClick={onClick}
        data-testid={test}
        type="button"
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        {children}
      </button>
    );
  }
}

export default Button;
