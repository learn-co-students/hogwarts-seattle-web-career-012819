import React, { Component } from 'react'
import Buttons from './Buttons'
import PigInfo from './PigInfo'

class PigCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoShowing: false,
      hogShowing: true
    }
  }

  handleMoreInfoClick = () => {
    console.log('handlemore')
    this.setState({infoShowing: true})
  }

  handleHideMeClick = () => {
    console.log('hidemore')
    this.setState({infoShowing: false})
  }

  handleHideHogClick = () => {
    this.setState({hogShowing: false})
  }

  handleShowHogClick = () => {
    this.setState({hogShowing: true})
  }

  showHog = () => {
    if (this.state.hogShowing) {
      return <div>
        <div className='image'>
            <img src={this.props.hog.image} alt="pig image"/>
        </div>
        <div className='content'>
          <h3>{this.props.hog.name}</h3>
        </div>
        <p>{this.props.hog.specialty}</p>
        <div>
          {this.state.infoShowing ? <PigInfo hog={this.props.hog}/> : null }
        </div>
        <Buttons
          handleMoreInfoClick={this.handleMoreInfoClick}
          handleHideMeClick={this.handleHideMeClick}
          handleHideHogClick={this.handleHideHogClick}
          hog={this.props.hog}
        />
      </div>
    }
    return <button onClick={this.handleShowHogClick}> Show Hog</button>
  }

  render() {
    return (
      <div className='ui card'>
        {this.showHog()}
      </div>
    )
  }

}

export default PigCard
