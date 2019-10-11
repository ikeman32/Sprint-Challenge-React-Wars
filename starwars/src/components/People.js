import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterCard } from "./PeopleCard";

export const Characters = props => {
  const [char, setChar] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <>
      <CharacterCard />
    </>
  );
};
