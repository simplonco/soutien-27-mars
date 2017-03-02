import React, { Component } from 'react';

import './product.css';

class Product extends Component {

  initClick () {
    this.props.add(this.props.product);
  }

  render() {
    return (
      <div className="product">
        {this.props.product.name} <br />
        {this.props.product.price}
        <div onClick={this.initClick.bind(this)}>BUY</div>
      </div>
    );
  }
}

export default Product;
