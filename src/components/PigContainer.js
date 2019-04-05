import React, { Component } from 'react';
import Pig from './Pig'
class PigContainer extends Component {


  render() {
    console.log("hogs in pig container", this.props.hogs)
    return (



      <div className="ui grid container">
        {this.props.hogs.map((hog, index) => {
          return <Pig hog={hog} pigPics={this.props.pigPics} num={index} />
        })}
      </div>
    );
  }
}

export default PigContainer;
