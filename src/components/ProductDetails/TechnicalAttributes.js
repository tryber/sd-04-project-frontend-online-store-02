import React from 'react';
import './ProductDetails.css';

class TechnicalAttributes extends React.Component {
  render() {
    const { data } = this.props;
    if (!data.attributes) return <p>Carregando...</p>;
    return (
      <div>
        <h3>Especificações técnicas</h3>
        {data.attributes.map((att) => (
          <p key={att.name}>
            {att.name}: {att.value_name}
          </p>
        ))}
      </div>
    );
  }
}

export default TechnicalAttributes;
