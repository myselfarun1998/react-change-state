import React from 'react';
export default class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>get</button>
        <button onClick={this.props.dec}>change to back</button>
      </div>
    );
  }
}
