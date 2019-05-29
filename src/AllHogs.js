import React, {Component} from 'react'
import EachHog from './components/EachHog'
import Filter from './components/Filter'

import augustus_gloop from './hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from './hog-imgs/bay_of_pigs.jpg'
import cherub from './hog-imgs/cherub.jpg'
import galaxy_note from './hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from './hog-imgs/leggo_my_eggo.jpg'
import mudblood from './hog-imgs/mudblood.jpg'
import piggy_smalls from './hog-imgs/piggy_smalls.jpg'
import porkchop from './hog-imgs/porkchop.jpg'
import rainbowdash from './hog-imgs/rainbowdash.jpg'
import sobriety from './hog-imgs/sobriety.jpg'
import spec from './hog-imgs/spec.png'
import the_prosciutto_concern from './hog-imgs/the_prosciutto_concern.jpg'
import trouble from './hog-imgs/trouble.jpg'
import truffleshuffle from './hog-imgs/truffleshuffle.jpg'

let imgArray = [augustus_gloop, bay_of_pigs, cherub, galaxy_note, leggo_my_eggo, mudblood, piggy_smalls, porkchop, rainbowdash, sobriety, spec, the_prosciutto_concern, trouble, truffleshuffle]

class AllHogs extends Component {
    constructor(props){
        super(props)

        this.state = {
            hogs: this.props.hogs
        }

        console.log(this.props.hogs)
        this.addImagesToHogs()
    }

    addImagesToHogs = () => {

        imgArray.forEach((pig,index) => {
            
            let name = pig.split("/")
            name = name.slice(3, name.length).join("")
            // console.log(name)
            let dotIndex = name.indexOf(".")
            name = name.slice(0, dotIndex)
            // console.log(name)
            if (name.includes("_")) {
                name = name.split("_").join(" ")
            }
            imgArray[index] = {id: index, name: name, location: pig}
        })

        console.log(imgArray)

        this.state.hogs.map((hog, index) => {
            
            let pigLocation = imgArray.filter(pig => {
                if (pig.name === hog.name.toLowerCase()){
                    return pig.location
                }
            })
            console.log(pigLocation)

            let newObj = hog
            hog.id = index
            hog.img = pigLocation[0].location
            this.setState({...this.state.hogs,
                hogs: newObj
            }, () => console.log(this.state.hogs))
        })

    }
    
    handleChange = (event) => {
        let filter = event.target.value
        console.log(this.props.hogs)
        console.log(filter)
        let newArrangement = []
        this.clearHtml()
        
        if (filter === "greased") {
            newArrangement = this.props.hogs.filter(hog => (
                hog.greased === true
            ))
        } else if (filter === "select") {
            newArrangement = this.props.hogs
        
        }else {
            newArrangement = this.props.hogs.sort((a, b) => 
            (a[filter] > b[filter]) ? 1 : -1)
        }

        this.setState({hogs: newArrangement}, () => console.log(this.state.hogs))
    }

    clearHtml = () => {
        let parent = document.getElementById("all-hogs")
        console.log(parent)
        if (parent.firstChild) {
            parent.firstChild.remove()
        }
    }


    render() {
        return (
            <div>
                <Filter hogs={this.props.hogs} handleChange={this.handleChange}/>
                <hr></hr>
                <br></br>

                <div id="all-hogs" className="ui grid container">
                {this.state.hogs.map((hog, index) => {
                    return <EachHog key={index} hog={hog} />
                })}
                </div>
            </div>
        )
    }
}

export default AllHogs