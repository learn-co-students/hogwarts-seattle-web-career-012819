import React from 'react'

const EachHog = (props) => {

    this.handleMoreInfo = (event) => {
        event.preventDefault()
        let getID = event.target.id
        let idIndex = getID.indexOf("-")
        let id = getID.split("").splice(idIndex+1, getID.length).join("")

        let main = document.getElementById(`main-${id}`)
        let more = document.getElementById(`more-${id}`)

        if (main.style.display==="none") {
            main.style.display="block"
        } else {
            main.style.display="none"
        }

        if (more.style.display==="none") {
            more.style.display="block"
        } else {
            more.style.display="none"
        }
    }

    this.displayItems = () => {
        if(props.hog !== undefined){

            return (
                <div className="hog"> 
                <div className="image">
                    <img src={props.hog.img} alt={props.hog.name} />
                </div>
                <div id={`main-${props.hog.id}`} className="main-content" style={{display:"block"}}>
                    <h2>{props.hog.name}</h2>
                    <h3>Specialty: {props.hog.specialty}</h3>
                </div>
                <div id={`more-${props.hog.id}`} className="additional-content" style={{display:"none"}}>
                    <h3>Highest Medal: {props.hog["highest medal achieved"]}</h3>
                    <h3>Weight: {props.hog.weight}</h3>
                    <h3>Greased: {props.hog.greased.toString()}</h3>
                </div>
                <div>
                    <br></br>
                    <button id={`info-${props.hog.id}`} name="more-info" value="More Info" onClick={this.handleMoreInfo}>More Info</button>
                    <button id={`hide-${props.hog.id}`} name="hide-me" value="Hide Me">Hide Me</button>
                </div>
            </div>
    
            )
        }
    }

    return (
    <div className="ui eight wide column card">
    {this.displayItems()} 
    </div>
    )

}

export default EachHog