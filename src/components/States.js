import React from 'react'

const States = (props) => {
  return (
    <div className='bg-warning'>
        <h1>{props.name}</h1>
        <h4>{props.language}</h4>
        <h4>{props.population}</h4>
    </div>
  )
}

export default States