import React from 'react';
import ReactDOM from 'react-dom';

// sample01
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app1')
);

function formatName(user) {
  return user.firstName + user.lastName;
}

// sample02
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

// sample03 Classを利用した方法
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
} 
const element2 = <Welcome name="sara" />;
ReactDOM.render(
  element2,
  document.getElementById('app3')
);

// sample04 関数を利用した方法
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('app4')
  );
}

setInterval(tick, 1000);

// sample05  propsとstate
class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <div>
        <h1>hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock2 />,
  document.getElementById('app5')
);

// sample06  life cycle
class Clock3 extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {date: new Date()};
  }

  componentWillMount() {
    console.log('conponentWillMount');
  }
  componentDidMount() {
    console.log('conponentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    console.log('tick');
    this.setState({
      date: new Date()
    });
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
const clock3 = ReactDOM.render(
  <Clock3 />,
  document.getElementById('app6')
);