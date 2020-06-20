import React from 'react';

class Price extends React.Component {
  render() {
    const { value } = this.props;
    return <span>{Number(value).toFixed(2)}</span>;
  }
}

export default Price;
