import React, {Component} from 'react'

class Filter extends Component {

    constructor (){
        super()
        this.state = {
            hogs: []
        }
        console.log(this.props)
    }

    render() {
    return (
        <div>
            <select onChange={this.props.handleChange}>
                <option value="select" name="select">Select</option>
                <option value="name" name="name">Name</option>
                <option value="weight" name="weight">Weight</option>
                <option value="greased" name="greased">Greased</option>
            </select>
        </div>
    )
    }

}

export default Filter