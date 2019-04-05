import React, { Component } from 'react';



class Pig extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }


  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    return (
      <div>
        {
          this.state.clicked ?

            <div>
              <div className="pigTile">
                <img src={this.props.pigPics[this.props.num]} />
                <h3>Name: {this.props.hog.name}</h3>
                <h4>Specialty: {this.props.hog.specialty}</h4>
                <h4>Weight: {this.props.hog.weight}</h4>
                <h4>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</h4>
                <button onClick={this.handleClick}>Hide Details</button>
              </div>
            </div>

            :
            < div className="pigTile" >
              < img src={this.props.pigPics[this.props.num]} />
              <h3>Name: {this.props.hog.name}</h3>
              <h4>Specialty: {this.props.hog.specialty}</h4>
              <button onClick={this.handleClick}>Show Details</button>
            </div >
        }
      </div>

    )
  }
}

export default Pig;

