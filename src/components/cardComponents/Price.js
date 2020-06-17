import React from 'react';

class Price extends React.Component {
  render() {
    const { value } = this.props;
    return <h2>{value}</h2>;
  }
}

export default Price;
