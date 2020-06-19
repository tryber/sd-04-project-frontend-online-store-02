import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt, test } = this.props;
    return <img data-testid={test} src={src} alt={alt} />;
  }
}

export default Image;
