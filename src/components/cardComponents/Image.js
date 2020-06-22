import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt, test, className } = this.props;
    return <img className={className} data-testid={test} src={src} alt={alt} />;
  }
}

export default Image;
