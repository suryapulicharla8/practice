import React from 'react'
import FourthComponent from './FourthComponent'

export const ThirdComponent = (Name) => {
    // const name="Nagul"
  return (
    <div>ThirdComponent:{Name}
    <FourthComponent name={Name}/>
    </div>
  )
}
export default ThirdComponent
