import React from "react"

const DogInfo = ({ dog, onGoodDogClick }) => {
  const handleButtonClick = () => {
    onGoodDogClick(!dog[0].isGoodDog, dog[0].id)
  }
  return (
    <>
      {dog.length > 0 ?  
      <>
        <img src={dog[0].image} alt={dog[0].name}/>
        <h2>{dog[0].name}</h2>
        {dog[0].isGoodDog ? 
          <button
            onClick={handleButtonClick}
          >Good Dog!</button> : 
          <button
            onClick={handleButtonClick}
          >Bad Dog!</button>
        }
      </>
      : null}
    </>
  )
}

export default DogInfo