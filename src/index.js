import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//我是dev
function Welcome(props) {
return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Sara" />
ReactDOM.render(
  element,
  document.getElementById('root')
)

serviceWorker.unregister();
