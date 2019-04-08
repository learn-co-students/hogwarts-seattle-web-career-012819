import React from 'react';

const HogCard = (props) => {

  const border = {
    margin: '10px',
    border: '10px solid silver',
    width: '50%',
    height: 'auto',
  }

  return(
    <div className="ui eight wide column" id={props.hog.name} style={border}>
      <img src={props.hog.img_url} alt="img"/>
      <br/>
      <strong>{props.hog.name}</strong>
      <br/>
      Specialty: {props.hog.specialty}
      <br/>
      <button style={{border:'2px solid orange', margin: '5px'}} name={props.hog.name}
      onClick={()=> {document.getElementById(props.hog.name).hidden = true}}>Hide Me</button>

      <details>
      <summary style={{border:'2px solid orange', width: '30%', marginLeft: '86px'}}>More Info</summary>
      Weight: {parseFloat(props.hog.weight)}
      <br/>
      Greased: {props.hog.greased.toString()}
      </details>

    </div>
  )
}

export default HogCard;
