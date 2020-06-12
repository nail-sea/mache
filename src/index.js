import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }

// const element = (
//   <h1>
//     Hello,mache, {formatName(user)}
//   </h1>
// )

// ReactDOM.render(
//   element,
  // <React.StrictMode>
  //   {/* <App /> */} 
  //   {/* <h1>hello, world!</h1> */}
  // </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//注意格式，没有钩子函数，会顺序执行，即执行setInterval(tick, 1000);
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

serviceWorker.unregister();
