import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt, test, className, mouseOver, mouseOut } = this.props;
    return (
      <img
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        className={className}
        data-testid={test}
        src={src}
        alt={alt}
      />
    );
  }
}

export default Image;
