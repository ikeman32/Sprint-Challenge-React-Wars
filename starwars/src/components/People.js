import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterCard } from "./PeopleCard";

export const Characters = props => {
  const [charData, setCharData] = useState([]);
  //const [characterCard, setCharacterCard]= useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data.results);
        setCharData(res.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <>
      {charData.map((char, index)=>(
          <CharacterCard
            key = {index} 
            name = {char.name}
            gender = {char.gender}
            height = {char.height}
            weight = {char.mass}
            hair = {char.hair_color}
            skin = {char.skin_color}
            />
      ))}
    </>
  );
};
