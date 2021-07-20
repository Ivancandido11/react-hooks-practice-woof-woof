import React, { useEffect, useState } from "react";

import Header from "./Header";
import DogInfo from "./DogInfo";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [dogClicked, setDogClicked] = useState("")
  const [goodDog, setGoodDog] = useState(false)

  const URL = "http://localhost:3001/pups/"

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => setDogs(data))
  }, [])

  const handleDogClick = (id) => {
    setDogClicked(id)
  }
  const handleGoodDogFilter = () => {
    setGoodDog(goodDog => !goodDog)
  }
  const handleGoodDogClick = (update, id) => {
    const updatedObj = {
      isGoodDog: update
    }
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObj)
    }
    fetch(`${URL}${id}`, configObj)
      .then(r => r.json())
      .then(data => {
        const updatedDogs = dogs.map(dog => {
          if(dog.id === data.id) return data
          else return dog
        })
        setDogs(updatedDogs)
      })
  }

  const displayDog = dogs.filter(dog => dog.id === parseInt(dogClicked))
  const dogSpans = dogs.filter(dog => {
    if (goodDog) return dog.isGoodDog === true
    else return true
  })

  return (
    <div className="App">
      <div id="filter-div">
        <Filter
          onGoodDogFilter={handleGoodDogFilter}
          goodDog={goodDog}
        />
      </div>
      <div id="dog-bar">
        <Header 
          dogs={dogSpans}
          onSpanClick={handleDogClick}
        />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo 
            dog={displayDog}
            onGoodDogClick={handleGoodDogClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
