import React from 'react';

class Title extends React.Component {
  render() {
    const { name, test } = this.props;
    return <h3 data-testid={test}>{name}</h3>;
  }
}

export default Title;
