import React, { Component } from 'react'
import HogDetails from './HogDetails'

class HogTile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    getImage = hogName => {
        let formattedName = hogName
          .split(" ")
          .join("_")
          .toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };

    handleTileClick = () => {
        this.setState({clicked: !this.state.clicked});


    }

    render() {
        const {name, specialty} = this.props.hog;
        return (
            <div className="ui card eight wide column pigTile">
                <div className="image">
                    <img src={this.getImage(name)} alt="Hog Pic" />
                </div>

                <div className="content">
                    <h3 className="header">{name}</h3>
                    <div className="description"><strong>Specialty: </strong>{specialty}</div>
                </div>
                
                <div className="extra content">
                    {this.state.clicked ? <HogDetails hog={this.props.hog}/> : null}

                    <button className="ui button" onClick={this.handleTileClick}>
                        {this.state.clicked ? "Less Info" : "More Info"}
                    </button>
                </div>
            </div>
        )
    }

}

export default HogTile;