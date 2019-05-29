import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import AllHogs from '../AllHogs';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < AllHogs hogs={hogs} />
      </div>
    )
  }
}

export default App;
