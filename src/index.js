import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

//我是dev 我是第二次的dev
// function Welcome(props) {
// return <h1>Hello, {props.name}</h1>
// }

// const element = <Welcome name="Saraddddddd" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )

// serviceWorker.unregister();
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img 
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  },
}

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} 
  />,
  document.getElementById('root')
);
