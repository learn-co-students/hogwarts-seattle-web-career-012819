import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigContainer from './PigContainer'
import hogs from '../porkers_data';
import Filter from './Filter'

import augustus from '../hog-imgs/augustus_gloop.jpg';
import cherub from '../hog-imgs/cherub.jpg';
import cherub2 from '../hog-imgs/cherub.png';
import trouble from '../hog-imgs/trouble.jpg';
import galaxy_note from '../hog-imgs/galaxy_note.jpg';
import leggo from '../hog-imgs/leggo_my_eggo.jpg';
import piggy from '../hog-imgs/piggy_smalls.jpg';
import porkchop from '../hog-imgs/porkchop.jpg';
import rainbowdash from '../hog-imgs/rainbowdash.jpg';
import sobriety from '../hog-imgs/sobriety.jpg';
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg';
import theprosciutto from '../hog-imgs/the_prosciutto_concern.jpg';
import bayofpigs from '../hog-imgs/bay_of_pigs.jpg';

const pigPics = [
  augustus, cherub, trouble, galaxy_note, leggo, piggy, porkchop, rainbowdash, sobriety, truffleshuffle,
  theprosciutto, bayofpigs, cherub2]


class App extends Component {
  constructor() {
    super()
    this.state = ({
      hogs: hogs,
      type: 'all',
      sort: "name"
    })
  }

  onChangeSort = (event) => {

    this.setState({
      sort: event.target.value
    }, () => {
      if (this.state.sort === "name") {
        this.sortedOptionName()
      } else {
        this.sortOptionWeight()
      }
    }
    )
  }

  sortOptionWeight = () => {
    let sortedWeightHogs = []
    sortedWeightHogs = this.state.hogs.sort(function (a, b) {
      console.log("inside sorted hogs ", sortedWeightHogs)
      return a.weight - b.weight
    })
    this.setState({
      hogs: sortedWeightHogs
    })
    console.log("what is sort", sortedWeightHogs)
  }


  sortedOptionName = () => {
    let nhogs = [];
    nhogs = this.state.hogs.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
    this.setState({
      hogs: nhogs
    })
  }


  onChangeType = (event) => {
    this.setState({
      type: event.target.value
    },
      () => { this.isGreased() }
    )
  }

  isGreased = () => {
    if (this.state.type === 'all') {
      this.setState({
        hogs: hogs
      })
    } else {
      let greased = []
      this.state.hogs.map((hog) => {
        if (hog.greased === true) {
          greased.push(hog)
        }
      })
      this.setState({
        hogs: greased
      })
    }
  }


  render() {
    return (

      <div className="App">
        < Filter onChangeType={this.onChangeType} type={this.state.type} onChangeSort={this.onChangeSort} sort={this.state.sort} />
        < Nav />
        < PigContainer hogs={this.state.hogs} pigPics={pigPics} />
      </div>
    )
  }
}

export default App;
