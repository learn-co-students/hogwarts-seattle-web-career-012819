import React, {Component} from 'react'

export default class SearchBar extends Component {

  state={
    searchText: ''
  }

  handleChange =(e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render(){
    return(
      <div>
        <select type='text' placeholder="search" onChange={this.props.handleChange}>
        <option value="weight"> Weight</option>
        <option value="name">Name</option>
        </select>
        <div>
        <label>Filter By Greasiness </label>
        <input id="grease-filter" type='checkbox' onChange={this.props.handleChecked}/>
        </div>
      </div>
    )
  }
}
