import React, { Component } from 'react';
import './App.css';

import Compo from './Compo/Compo.js';

var itemA = 'sac'
var itemB = 'bijou'

class App extends Component {

  constructor (props) {
    super(props)
        this.state = {
      itemA : 'sac',
      itemB: 'bijou'
    }

    // window.setTimeout( () => {

    //   console.log('yo');
    //   this.setState({itemB: 'manteau'});
    // }, 5000)
  }

  render() {
    return (
      <div className="App">
        <Compo item={this.state.itemA}/>
        <Compo item={this.state.itemB}/>
      </div>
    );
  }
}

export default App;
