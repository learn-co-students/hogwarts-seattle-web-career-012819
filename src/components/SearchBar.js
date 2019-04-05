import React, {Component} from 'react'

export default class SearchBar extends Component {

  render(){
    return(
      <div>
        <select
          type='text'
          placeholder="search"
          onChange={this.props.handleChange}>
          <option value="weight"> Weight</option>
          <option value="name">Name</option>
        </select>
        <div>
          <label> Greased or Not ? </label>
          <input
            id="grease-filter"
            type='checkbox'
            onChange={this.props.handleChecked}
          />
        </div>
      </div>
    )
  }
}
