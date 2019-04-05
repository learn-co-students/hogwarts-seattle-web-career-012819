import React, { Component } from 'react'

class HogDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {greased, weight} = this.props.hog;
        const medal = this.props.hog['highest medal achieved'];
        return (
            <div className="description">
			    <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
			    <p>
				    Highest medal achived: <strong>{medal}</strong>
			    </p>
			    <p>
				    Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
				    with Thru-the-Door Ice and Water: <strong>{weight}</strong>
			    </p>
            </div>
        )
    }
}

export default HogDetails;