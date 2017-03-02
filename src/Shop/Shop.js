import React, { Component } from 'react';

import Basket from '../Basket/Basket.js'
import Product from '../Product/Product.js'

import './shop.css';

class Shop extends Component {

  constructor (props) {
    super (props);
 
    const products = [
      {
        name: 'bag',
        price: 10
      },
      {
        name: 'shoes',
        price: 30
      },
      {
        name: 'jacket',
        price: 20
      }
    ];

    this.state = {
      products: products,
      purchase: []
    }

  }

  add (product) {
    let arr = this.state.purchase;
    arr.push(product);
    this.setState({purchase: arr});
  }

  render() {

    return (
      <div className="shop">
        <Basket purchase={this.state.purchase} />
        {this.state.products.map( (product,i) => {
          return (
            <Product key={i} product={product} add={this.add.bind(this)}/>
          );
        })}
      </div>
    );
  }
}

export default Shop;
