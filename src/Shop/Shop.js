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
      basket: 0
    }
  }

  addBasket (price) {
    /* Cette fonction nous servira à ajouter des produits à notre panier */
  }

  render() {

    return (
      <div className="shop">
        <Basket />
        {
          this.state.products.map( (product,i) => {
            return <Product key={i} name={product.name} price={product.price}/>
          })
        }
      </div>
    );
  }
}

export default Shop;
