import React, { PropTypes } from 'react';

class TestComp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: ++this.state.count,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>increase</button>
        <p>count: {this.state.count}</p>
      </div>
    );
  }
}

export default TestComp;
