import React from 'react'

const Buttons = (props) => {
  return (
    <div className='ui eight wide column'>
      <button onClick={props.handleMoreInfoClick}>More Info</button>
      <button onClick={props.handleHideMeClick}>Hide Me</button>
      <button onClick={props.handleHideHogClick}> Hide Hog</button>
    </div>
  )
}

export default Buttons