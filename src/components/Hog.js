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

    hide = (e) => {
      e.target.parentNode.classList.add("hide-me")
    }

  render(){
    return (
      <div className ='ui eight wide pigTile' key={this.props.hog.name}>
        <img src = {this.props.imgPrep(this.props.hog.name)} alt = {this.props.hog.name}/>
        <h3 className="smallHeader"> {this.props.hog.name}</h3>
        <button onClick={this.handleClick}> Show Details </button>
        {this.state.clicked ? <Extra hog={this.props.hog}/> : null}
        <button onClick={this.hide}> Hide This Pig</button>
      </div>
    )
  }
}


const Extra = (props) => {
  return (
    <div>
      <p className="normalText achievementText"> Speciality: {props.hog.specialty}</p>
      <p className="normalText"> Weight: {props.hog.weight}</p>
      <p className="normalText"> Highest Medals Achieved{props.hog['heighest medal acheived']}</p>
    </div>
  )
}



export default Hog
