import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt, test, className, width } = this.props;
    return <img width={width} className={className} data-testid={test} src={src} alt={alt} />;
  }
}

export default Image;
