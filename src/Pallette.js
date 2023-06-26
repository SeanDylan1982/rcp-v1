import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallette.css';
import Navbar from './Navbar';

class Pallette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    }
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level })
  }
  changeFormat(evt) {
    this.setState({
      format: evt.target.value,
    })
  }
  render() {
    const { colors } = this.props.pallette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(
      color => <ColorBox background={color.hex} name={color.name} />);
    return (
      <div className="Pallette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={ this.changeFormat } />
        {/* Navbar here */}
        <div className="Pallette-colors">
          {/* Colors boxes */}
          {colorBoxes}
        </div>
        {/* Footer */}
      </div>
    );
  }
}

export default Pallette;
