import React, {Component} from 'react'

class Hog extends Component{

    state={
      clicked: false
    }

    handleClick=() => {
      this.setState(prevState => ({
    clicked: !prevState.clicked
    }));
    }

  render(){
    return (
      <div className ='ui eight wide' key={this.props.hog.name}>
        <img src = {this.props.imgPrep(this.props.hog.name)} alt = {this.props.hog.name}/>
        <p> {this.props.hog.name}</p>
        <button onClick={this.handleClick}> Show Details </button>
        {this.state.clicked ? <Extra hog={this.props.hog}/> : null}

      </div>
    )
  }
}


const Extra = (props) => {
  return (
    <div>
      <p> Speciality: {props.hog.specialty}</p>
      <p> Weight: {props.hog.weight}</p>
      <p> Highest Medals Achieved{props.hog['heighest medal acheived']}</p>
    </div>
  )
}



export default Hog
