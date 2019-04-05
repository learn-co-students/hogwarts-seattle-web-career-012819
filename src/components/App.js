import React, { Component } from 'react';
import '../App.css';
import PigPen from './PigPen'
import Button from './Button'

import Nav from './Nav'
import hogs from '../porkers_data';

import augustus from '../hog-imgs/augustus_gloop.jpg'
import bay from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy from '../hog-imgs/galaxy_note.jpg'
import eggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbow from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import prosciutto from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffle from '../hog-imgs/truffleshuffle.jpg'

const IMAGES = [augustus, bay, cherub, galaxy, eggo, mudblood, smalls, porkchop, rainbow, sobriety, prosciutto, trouble, truffle]

let newHogs = hogs.map((hog, index) => {
    let updatedHog = {...hog}
    updatedHog.image = IMAGES[index]
    return updatedHog
  })

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: newHogs
    }
  }

  sortByWeight = (oldhogs) => {
    this.setState({hogs:oldhogs.sort(function(a,b){
      return a.weight - b.weight;
    })})
  }

  filterByGreased = (oldhogs) => {
    this.setState({hogs:oldhogs.filter(hog => hog.greased === true)})
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Button handleClick={() => {this.sortByWeight(this.state.hogs)}} text="Sort by Weight"/>
          <Button handleClick={() => {this.filterByGreased(this.state.hogs)}} text="Filter by Greased"/>
          <PigPen hogs={this.state.hogs} sortByWeight={this.sortByWeight}/>
      </div>
    )
  }
}

export default App;
