import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button onClick={props.handleClick} data-target={props.data_target} data-toggle={props.data_toggle}>{props.text}</button>
  )
}

export default Button
