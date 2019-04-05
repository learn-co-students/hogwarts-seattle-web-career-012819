import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigCard from './PigCard'
import AgustusImage from '../hog-imgs/augustus_gloop.jpg'
import BayOfPigsImage from '../hog-imgs/bay_of_pigs.jpg'
import CherubPng from '../hog-imgs/cherub.png'
import GalaxyNoteImage from '../hog-imgs/galaxy_note.jpg'
import LeggoImage from '../hog-imgs/leggo_my_eggo.jpg'
import MudbloodImage from '../hog-imgs/mudblood.jpg'
import PiggySmallsImage from '../hog-imgs/piggy_smalls.jpg'
import PorkchopImage from '../hog-imgs/porkchop.jpg'
import RainbowDashImage from '../hog-imgs/rainbowdash.jpg'
import SobrietyImage from '../hog-imgs/sobriety.jpg'
import ConcernImage from '../hog-imgs/the_prosciutto_concern.jpg'
import TroubleImage from '../hog-imgs/trouble.jpg'
import TruffleShuffleImage from '../hog-imgs/truffleshuffle.jpg'
const porkerImages = [
{image: AgustusImage},
{image: BayOfPigsImage},
{image: CherubPng},
{image: GalaxyNoteImage},
{image: LeggoImage},
{image: MudbloodImage},
{image: PiggySmallsImage},
{image: PorkchopImage},
{image: RainbowDashImage},
{image: SobrietyImage},
{image: ConcernImage},
{image: TroubleImage},
{image: TruffleShuffleImage}
]

class App extends Component {
  constructor() {
    super()
    const updatedHogsArray = hogs.map((hog, i) => {
      return {...hog, id: i, image: porkerImages[i].image}
    })
    this.state = {hogs: updatedHogsArray}
  }



  createHogs = () => {
    return this.state.hogs.map((hog) => {
      return <PigCard 
        hog={hog}
        key={hog.id}
      />
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          {this.createHogs()}
      </div>
    )
  }
}

export default App;
