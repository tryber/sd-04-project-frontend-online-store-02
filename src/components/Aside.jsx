import React, { Component } from 'react';
import * as api from '../services/api'

class Aside extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    api.getCategories().then((data) => this.setState({ categories: data }))
  }

  // 
  render() {
    const {categories} = this.state
    const { click } = this.props
    return (
      <div className="categories">
        <h3>categories</h3>
        {categories.map(category => (
          <button
          type="button"
          data-testid="category"
          key={category.id}
          value={category.name}
          onClick={() => click(category.name)}
          >
          {category.name}
        </button>
        ))}
      </div>
    );
  }
}

export default Aside;