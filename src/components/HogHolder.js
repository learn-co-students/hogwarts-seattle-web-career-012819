import React, { Component } from 'react';
import App from './App';
import HogData from './HogData';
import Buttons from './Buttons'

class HogHolder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataDisplaying: false,
      hogDisplaying: true
    }
  }

  handleDisplayClick = () => {
    this.setState({dataDisplaying: true})
  }

  handleHideClick = () => {
    this.setState({dataDisplaying: false})
  }

  handleHogHide = () => {
    this.setState({hogDisplaying: false})
  }

  handleHogShow = () => {
    this.setState({hogDisplaying: true})
  }

  renderHogHolder = () => {
    if (this.state.hogDisplaying) {
      return <div >
      <div className='image'>
        <img src={this.props.hog.image} />
      </div>
      <div className='info'>
        <h4>{this.props.hog.name}</h4>
      </div>
      <p>{this.props.hog.specialty}</p>
      <div>
        {this.state.dataDisplaying ? <HogData hog={this.props.hog}/> : null}
      </div>
      <Buttons
        handleDisplayClick={this.handleDisplayClick}
        handleHideClick={this.handleHideClick}
        handleHogHide={this.handleHogHide}
        hog={this.props.hog} />
      </div>
    }
    return <button onClick={this.handleHogShow}> Display Hog </button>
  }

  render() {
    return (
      <div className='ui four wide column'>
        {this.renderHogHolder()}
      </div>
    )
  }
}

export default HogHolder
