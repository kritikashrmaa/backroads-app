import React from 'react'

const Title = (props) => {
  return (
    <div className="section-title">
    <h2>{props.h1} <span>{props.h2}</span></h2>
  </div>
  )
}

export default Title
