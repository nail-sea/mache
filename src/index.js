import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//我是dev 我是第二次的dev
function Welcome(props) {
return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Saraddddddd" />
ReactDOM.render(
  element,
  document.getElementById('root')
)

serviceWorker.unregister();
