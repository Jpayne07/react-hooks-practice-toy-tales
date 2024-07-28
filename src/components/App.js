import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([])

  const API = 'http://localhost:3001/toys'

  useEffect(()=> {fetch(API)
  .then(r => r.json())
  .then(setToyArray)
  
},[])

function renderNewToy(e){
  e.preventDefault()
  const newToy = {
    id: toyArray.length +1,
    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0
  }
  setToyArray([...toyArray, newToy])
  fetch(API, {
    method:'POST',
    body: JSON.stringify(newToy),
    headers: {
      "Content-Type": "application/json",
    }
  })
  
}

function donate(id){
  fetch(`${API}/${id}`,{
    method:'DELETE',
    body: null,
    headers: {
      'Content-Type': 'application/json'
      }
    } 
  )
  const filteredArray = toyArray.filter(toy =>toy.id !==id)
  setToyArray(filteredArray)
}

function like(id, likes) {
  fetch(`${API}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ likes: likes + 1 }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    setToyArray(toyArray.map(toy => 
      toy.id === id ? { ...toy, likes: likes + 1 } : toy
    ));
  });
}
  



  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm renderNewToy = {renderNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray = {toyArray} donate={donate} like ={like}/>
    </>
  );
}

export default App;
