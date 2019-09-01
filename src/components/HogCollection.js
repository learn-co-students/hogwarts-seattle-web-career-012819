import React,{ Component } from 'react';
import HogCard from './HogCard'

class HogCollection extends Component {
    makeHogCard=()=> {
       return  this.props.hogs.map((hog,index)=> {
           return  <HogCard hog={hog} key={index} />
        })
    }

    render(){
        return (
            <div className="ui link cards">
               {this.makeHogCard()}
            </div>
            
            
        )
        
    }

}

export default HogCollection