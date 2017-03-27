// ES5 => var React = require('react');
// ES5 => var Component = require('react').Component;

import React, {Component} from 'react';


class Compo extends Component {

  // REACT lifecycle
  // au moment ou on lis le javascript
  constructor (props) {
    /*

    {
      item: 'sac',
      price: '10'
    }

    this.props.item = props.item
    this.props.price = props.price

    */
    super(props);

    // this = intsance de notre Component
    // <Compo /> instance 1 va avoir par exemple props.item = 'sac'
    // <Compo /> instance 2 va avoir par exemple props.item = 'bijou'
    console.log(props.item);

    this.state = {
      greetings: 'hello'
    }
    // this = intsance de notre Component
    // <Compo /> instance 1 va avoir par exemple this.state.greetings = 'hello'
    // <Compo /> instance 2 va avoir par exemple this.state.greetings = 'hello'
    console.log(this.state.greetings)
    //this.custom = this.custom.bind(this);
  }

  componentWillMount() {
    // executer avant que le compoenent ai chargé/render
    console.log('HELLO will mount');
  }

  // render () generer le html
  componentDidMount() {
    // executer apres que le compoenent ai chargé/render
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Va update' : nextProps);
    // nextProps = la nouvelle valeur du props modifié
    // nextState = la nouvelle valeur du state modifié
    // executer avant que le compoenent ai chargé/render quand je change la valeur d'un state ou d'un props
  }

  // render () generer le html
  componentDidUpdate(prevProps, prevState) {
    console.log('a update', prevProps);
    // prevProps = l'ancienne valeur du props modifié
    // prevState = l'ancienne valeur du state modifié
    // executer apres que le compoenent ai chargé/render quand je change la valeur d'un state ou d'un props 
  }


  custom = () => {
    console.log(this.state.greetings);
  }

  render () {
    // ne return qu'un seule balise wrapper
    // JSX = tout ce qu'il y a entre les parenthèses c'est du html
    return (
      <div> {/*comment*/}
        <div onClick={this.custom}>CLICK ME</div>
      </div>
    )
  }
}

export default Compo;