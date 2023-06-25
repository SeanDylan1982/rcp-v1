import React, { Component } from 'react';
import seedColors from './seedColors';
import Pallette from './Pallette';
import './App.css';
import { generatePallette } from './ColorHelpers';

class App extends Component {
  static defaultProps = {
    colors: seedColors,
  }
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Pallette pallette={generatePallette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
