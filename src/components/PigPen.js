import React, { Component } from 'react';
import Hog from './Hog'

class PigPen extends Component {
  render() {
    return (
      <ul className="ui grid container">
        {this.props.hogs.map((hog, index) => {
          return <Hog hog={hog} key={hog.name} />
        })}
      </ul>
    );
  }
}

export default PigPen;
