import React from "react"

const Header = ({ dogs, onSpanClick }) => {
  const handleSpanClick = (e) => {
    onSpanClick(e.target.id)
  }
  return (
    <>
      {dogs.map(dog => 
        <span
          id={dog.id}
          key={dog.id}
          onClick={handleSpanClick}
        >{dog.name}
        </span>)
      }
    </>
  )
}

export default Header