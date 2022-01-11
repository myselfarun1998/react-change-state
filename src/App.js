import React from 'react';
import './style.css';
import Button from './Button.js';
// export default class App extends React.Component {
//   constructor() {
//     super();
//     let s = 'hhh';
//     this.state = {
//       name: '',
//       city: '',
//       age: '',
//     };
//   }

//   incrementCount = (event) => {
//     console.log();
//     this.setState({
//       name: 'ram',
//       city: 'selam',
//       age: '12',
//     });
//   };

//   decrementCount = () => {
//     this.setState({
//       name: '',
//       city: '',
//       age: '',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1 style={{ color: 'red' }}>
//           {this.state.name} {this.state.city} {this.state.age}
//         </h1>
//         <Button inc={this.incrementCount} dec={this.decrementCount} />
//       </div>
//     );
//   }
// }
// // session task
// //name: city age:
// //display the above info in parent on a button click from child

// //task : display the count in green till 5 after 5 shud be displayed in red
// //should not allow negative val to be displayed


class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: this.element.value });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={el => this.element = el} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{ this.state.value }</p>
      </div>
    );
  }
}

ReactDOM.render(<TextInput/>, document.getElementById('app'))