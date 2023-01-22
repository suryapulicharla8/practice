import React from 'react'
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
    const Name="Surya"
  return (
    <div>FirstComponent:{Name}
    <SecondComponent name={Name}/>
    </div>
  )
}

export default FirstComponent