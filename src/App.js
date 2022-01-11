import React from 'react';
import './style.css';
import Button from './Button.js';
export default class App extends React.Component {
  constructor() {
    super();
    let s = 'hhh';
    this.state = {
      name: '',
      city: '',
      age: '',
    };
  }

  incrementCount = (event) => {
    console.log();
    this.setState({
      name: 'ram',
      city: 'selam',
      age: '12',
    });
  };

  decrementCount = () => {
    this.setState({
      name: '',
      city: '',
      age: '',
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'red' }}>
          {this.state.name} {this.state.city} {this.state.age}
        </h1>
        <Button inc={this.incrementCount} dec={this.decrementCount} />
      </div>
    );
  }
}
// session task
//name: city age:
//display the above info in parent on a button click from child

//task : display the count in green till 5 after 5 shud be displayed in red
//should not allow negative val to be displayed
