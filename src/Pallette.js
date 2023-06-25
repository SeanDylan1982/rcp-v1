import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Pallette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500, 
    }
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level })
  }
  render() {
    const { colors } = this.props.pallette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(
      color => <ColorBox background={color.hex} name={color.name} />);
    return (
      <div className="Pallette">
        <Slider defaultValue={level} min={100} max={900} step={100} onChange={this.changeLevel} />
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
