import React from 'react';

const Buttons = (props) => {
  return (
    <div className="ui eight wide column">
      <button onClick={props.handleDisplayClick}>See More</button>
      <button onClick={props.handleHideClick}>See Less</button>
      <button onClick={props.handleHogHide}>I Don't Want to See This Hog</button>
    </div>
  )
}

export default Buttons
