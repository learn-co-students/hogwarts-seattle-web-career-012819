import React from 'react';

const HogData = (props) => {
  const isGreasy = (props) => {
    let msg = ''
    if (props.hog.greased) {
      msg = `That's one slippery pig!`
    } else {
      msg = `That pig dry as hell`
    }
    return msg
  }

  return (
    <div>
      <h3>{isGreasy(props)}</h3>
      <p>{props.hog.weight}</p>
      <p>{props.hog.highestMedal}</p>
      <p>{props.hog.specialty}</p>
    </div>
  )
}

export default HogData
