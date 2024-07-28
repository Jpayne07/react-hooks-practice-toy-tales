import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray, donate, like}) {
  const toys = toyArray.map((toy) => (
    <ToyCard 
      key = {toy.id}
      id = {toy.id}
      name = {toy.name}
      image = {toy.image}
      likes = {toy.likes}
      donate ={donate}
      like={like}
    />
  ))
  



  return (
    <div id="toy-collection">{toys}</div>
  )};


export default ToyContainer;
