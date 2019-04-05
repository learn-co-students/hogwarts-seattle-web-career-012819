import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogTiles from './HogTiles.js'
import SearchBar from './SearchBar.js'

import hogs from '../porkers_data';

export default class App extends Component {
constructor(props){
  super(props)
    this.state={
      filter: '',
      greased: false
  }
}

handleChange =(e) => {
  this.setState({
    filter: e.target.value
  })
}

handleChecked = (e) => {
  this.setState({
    greased: e.target.checked
  })
}

  render() {
    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          handleChecked={this.handleChecked}
        />
        < Nav
          handleChange={this.handleChange}
        />
      <HogTiles
        hogs={hogs}
        filter ={this.state.filter}
        greased ={this.state.greased}
      />
    </div>
    )
  }
}
