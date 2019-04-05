import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <select name="type" id="type" onChange={this.props.onChangeSort}>
              <option>Sorting Options</option>
              <option value="weight">By Weight</option>
              <option value="name">By Name</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <select name="type" id="type" onChange={this.props.onChangeType}>
              <option>Greased Filter</option>
              <option value="all">All Pigs</option>
              <option value="greased">Greased Pigs Only</option>
            </select>
          </div>
        </div>


      </div>
    );
  }
}

export default Filter;
