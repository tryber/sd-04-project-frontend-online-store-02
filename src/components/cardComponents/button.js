import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, test, onClick, className } = this.props;
    return (
      <button className={className} onClick={onClick} data-testid={test} type="button">
        {children}
      </button>
    );
  }
}

export default Button;
