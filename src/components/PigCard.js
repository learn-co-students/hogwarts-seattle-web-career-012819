import React, { Component } from 'react'
import Buttons from './Buttons'
import PigInfo from './PigInfo'

class PigCard extends Component {
  constructor(props) {
    super(props)
    this.state = {showing: false}
  }

  handleMoreInfoClick = () => {
    console.log('handlemore')
    this.setState({showing: true})
  }

  handleHideMeClick = () => {
    console.log('hidemore')
    this.setState({showing: false})
  }

  render() {
    return (
      <div className='ui card'>
        <div className='image'>
          <img src={this.props.hog.image} alt="pig image"/>
        </div>
        <div className='content'>
          <h3>{this.props.hog.name}</h3>
        </div>
        <p>{this.props.hog.specialty}</p>
        {this.state.showing ? <PigInfo hog={this.props.hog}/> : null }
        <Buttons 
          handleMoreInfoClick={this.handleMoreInfoClick}
          handleHideMeClick={this.handleHideMeClick}
          hog={this.props.hog}
        />
      </div>
    )
  }

}

export default PigCard