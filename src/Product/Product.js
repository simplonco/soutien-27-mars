import React, { Component } from 'react';

import './product.css';

class Product extends Component {

  render() {
    return (
      <div className="product">
        {this.props.name} <br />
        {this.props.price}
        <div>BUY</div>
      </div>
    );
  }
}

export default Product;
