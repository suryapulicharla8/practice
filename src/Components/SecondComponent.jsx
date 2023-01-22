import React from 'react'
import ThirdComponent from './ThirdComponent'

const SecondComponent = (Name) => {
    // const name="Sai"
  return (
    <div>SecondComponent:{Name}
    <ThirdComponent name={Name}/>
    </div>
  )
}

export default SecondComponent