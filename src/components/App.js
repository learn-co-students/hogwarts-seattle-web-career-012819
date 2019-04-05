import React, { Component } from 'react';
import '../App.css';
import HogContainer from './HogContainer';
import Nav from './Nav'
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="ui grid container App">
          <div className="sixteen wide column centered">
            <Nav />
          </div>
          
          <HogContainer hogs={hogs}/>
      </div>
    )
  }
}

export default App;
