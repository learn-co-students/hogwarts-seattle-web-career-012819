import React, { Component } from 'react';
import Button from './Button'

class Hog extends Component {
  render() {
    return (
      <li id={this.props.hog.name} className="ui four wide column pigTile">
      <img src={this.props.hog.image}/>
        <h3>{this.props.hog.name}</h3>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Weight: {this.props.hog.weight}</p>
        <details>
        <summary>More Info</summary>
        <p>Greased: {this.props.hog.greased.toString()}</p>
        <p>Highest medal achieved: {this.props.hog["highest medal achieved"]}</p>
        </details>
        <Button text="Hide this Hog" handleClick={() => {document.getElementById(`${this.props.hog.name}`).style.display = "none"}}/>
      </li>
    );
  }
}

export default Hog;
