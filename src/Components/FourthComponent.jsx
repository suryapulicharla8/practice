import React from 'react'
import FifthComponent from './FifthComponent'

const FourthComponent = (Name) => {
    // const name="Suresh"
  return (
    <div>FourthComponent:{Name}
    <FifthComponent name={Name}/>
    </div>
  )
}

export default FourthComponent