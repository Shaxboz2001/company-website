import React, { Component } from 'react';
import Display from './Dispaly';

class Button extends Component {
  state = { display: true };
  delete = () => {
    this.setState({ display: false });
  };
  render() {
    let comp;
    if (this.state.display) {
      comp = <Display />;
    }
    return (
      <div>
        {comp}
        <button onClick={this.delete}>Delete the component</button>
      </div>
    );
  }
}
 
export default Button;