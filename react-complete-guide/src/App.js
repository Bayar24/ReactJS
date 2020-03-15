import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age:28, sex: 'M'},
      {name: 'Max1', age:281, sex: 'M'},
      {name: 'Max2', age:283, sex: 'M'},
    ]
  } 
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <button>Switch</button>
        <Person name='Ba' age='3' sex='M'>fff</Person>
        <Person name='Be' age='3' sex='M'>asdf</Person>
        <Person name='Bo' age='3' sex='M'>asdf</Person>
      </div>
    );
  }
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi react'));
}

export default App;
