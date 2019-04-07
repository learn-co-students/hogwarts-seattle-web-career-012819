import React from 'react';
import HogCard from './HogCard'
const RenderHog = (props) =>{

  return(
    <div className="ui grid container" >
      <br/>
      {
        props.allHogs.map(hog =>{
          return <div className="ui eight wide column" key={hog.name}>
            <HogCard hog={hog}  />
          </div>
        })
      }

    </div>
  )
}

export default RenderHog;
