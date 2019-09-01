import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCollection from './HogCollection'

class App extends Component {
  isAssending=true
  state= {
    hogs:hogs
  }

  filterGreased=() => {
    let newhogs=[...this.state.hogs].filter(hog=> {
      console.log(hog.greased)
      return hog.greased===true
    })
    this.setState({
      hogs:newhogs
    })

  }

  compare = (a,b) => {
    return b-a
  }
  sortByName=()=>{

    let newhogs=hogs.sort((hog1,hog2)=>{
      return (hog1.name > hog2.name)? 1:((hog2.name>hog1.name)? -1:0)
    })
    this.setState({
      hogs:newhogs
    })
  }

 
  sortByWeight=()=> {
    let scale = 1
    if (this.isAssending) {
      scale =-1;
    }
    this.isAssending=!this.isAssending
    let newhogs=hogs.sort((hog1,hog2)=> {
      let w1 =scale*hog1.weight
      let w2 =scale*hog2.weight
      return this.compare(w1,w2)
    })
    console.log(newhogs)
    this.setState({hogs:newhogs})
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByWeight}>Sort by weight</button>
          <button onClick={this.filterGreased}>Filter by greased</button>
          <HogCollection hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
