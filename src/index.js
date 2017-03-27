import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import './index.css';

console.log(BrowserRouter);

const Content = () => {
  return (
    <div>
      Hello
    </div>
  )
}

const Test = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/yo" component={Content} />
        <Route exact path="/" component={App} />
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <Test />,
  document.getElementById('root')
);
