import React, { Component } from 'react'
import HogTile from './HogTile'

class HogContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pigs: []
        }
    }

    componentDidMount() {
        
    }

    loadPigs = () => {
        return this.props.hogs.map((hog, index) => {
            return <HogTile key={index} hog={hog} />
        })
    }

    render() {
        return(
            <div className="ui three stackable cards">
                {this.loadPigs()}
            </div>
        )
    }
}

export default HogContainer;