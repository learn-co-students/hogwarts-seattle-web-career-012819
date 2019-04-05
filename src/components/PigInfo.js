import React from 'react'

const PigInfo = (props) => {

  const isGreasy = (props) => {
    let message = ''
    if (props.hog.greased) {
      message = 'Greasy Boy'
    } else {
      message = 'Fresh Boy'
    }
    return message
  }

  return (
    <div className='ui eight wide column'>
      <h3>{isGreasy(props)}</h3>
      <p>{props.hog.weight}</p>
      <p>{props.hog.highestMedal}</p>
    </div>
  )
}

export default PigInfo