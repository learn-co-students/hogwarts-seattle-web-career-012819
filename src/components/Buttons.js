import React from 'react'

const Buttons = (props) => {
  return (
    <div className='ui eight wide column'>
      <button onClick={props.handleMoreInfoClick}>More Info</button>
      <button onClick={props.handleHideMeClick}>Hide Me</button>
    </div>
  )
}

export default Buttons