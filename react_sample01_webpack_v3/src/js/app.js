import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app1')
);

function formatName(user) {
  return user.firstName + user.lastName;
}

var user = {
  firstName: 'zen',
  lastName: 'nosuke'
};

var element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('app2')
);