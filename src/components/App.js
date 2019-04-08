import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import RenderHog from './RenderHog';
class App extends Component {

  constructor(){
    super()
    this.state = {
      allHogs: [],
      filteredHog: []
    }
  }

  componentDidMount(){
    this.setState({
      allHogs: hogs,
      filteredHog: hogs
    })
  }

  handleGreased = ()=>{
    const filteredArray = []
    if(document.getElementById('checkGreased').checked){
      this.state.allHogs.map(hog =>{
        if(hog.greased){
          filteredArray.push(hog)
        }
      })
      this.setState({
        filteredHog: filteredArray
      })

    }
    else{
      this.setState({
        filteredHog: this.state.allHogs
      })
    }
    return this.state.filteredHog
  }

  handleSorting = (ev)=>{
    console.log(ev.target.value)
    console.log(this.state.filteredHog)
    this.setState({
      filteredHog: this.state.filteredHog
    })
    if(ev.target.value === 'byName'){
      this.state.filteredHog.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.handleGreased()
    }
    else if(ev.target.value === 'byWeight'){
      this.state.filteredHog.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
      this.handleGreased()
    }
  }

  render() {
    {console.log(this.state.filteredHog)}
    return (
      <div className="App ">
        < Nav />
      <label><strong>Filter: </strong> </label>
      <select onChange={this.handleSorting}>
        <option value='showAll'>Sort</option>
        <option value='byName' id='byName'>By Name</option>
        <option value='byWeight' id='byWeight'>By Weight</option>
      </select>
      <label>Greased: </label>
        <input
          type="checkbox" style={{marginBottom: "50px"}}
          id="checkGreased" onChange={this.handleGreased}
        />
      <RenderHog allHogs={this.state.filteredHog} />

      </div>
    )
  }
}

export default App;
