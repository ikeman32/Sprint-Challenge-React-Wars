import React from "react";
import styled from "styled-components";

const SwPeople = styled.div`
border: 1px solid red;
background-color: none;
width: 30%;
margin: 0 auto;
margin-bottom: 1rem;
border-radius: 1rem;
`;

const Name = styled.h2`
color: crimson;
`;

const Bio = styled.ul`
list-style-type: none;
`;

const Info = styled.li`
text-align: left;
color: #730000;
padding: 1rem;
`;

export const CharacterCard = props =>{

    return(
        <SwPeople>
            <Name>Name: {props.name}</Name>
            <Bio>
                <Info name="Gender">Gender: {props.gender}</Info>
                <Info name="Height">Height: {props.height}</Info>
                <Info name="Weight">Mass: {props.weight}</Info>
                <Info name="Hair_Color">Hair: {props.hair}</Info>
                <Info name="Skin_Color">Skin: {props.skin}</Info>
            </Bio>

        </SwPeople>
    )
}