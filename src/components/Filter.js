import React from "react"

const Filter = ({ goodDog, onGoodDogFilter }) => {
  const handleGoodDogClick = () => {
    onGoodDogFilter()
  }

  return (
    <button 
      id="good-dog-filter"
      onClick={handleGoodDogClick}
    >Filter good dogs: {goodDog ? "ON" : "OFF"}
    </button>
  )
}

export default Filter