import React, { Component } from 'react';

import './basket.css';

class Basket extends Component {
  render() {
    return (
      <div className="basket">
        {
          this.props.purchase.map( p =>
            <div> {p.name} <br /> {p.price}</div>
          )
        }
      </div>
    );
  }
}

export default Basket;
