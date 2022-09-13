import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { StyledButton, StyledList, StyledPokemon } from "./Styled/StyledList";

import Loader from "./Loader";

export default function List({
  isRetrievingData,
  pokemonList,
  handleGetNextPage,
}) {
  const navigatePage = useNavigate();

  return (
    <>
      <StyledList>
        {pokemonList.map((pokemon) => {
          return (
            <StyledPokemon
              key={uuidv4()}
              onClick={() => navigatePage(`/pokemon/${pokemon.name}`)}
            >
              <img
                src={pokemon.sprites.front_default}
                alt=""
                className="pokemon__image"
              />
              <p key={pokemon.id}>{pokemon.name}</p>
            </StyledPokemon>
          );
        })}
      </StyledList>
      {isRetrievingData ? <Loader /> : null}
      <StyledButton onClick={handleGetNextPage}>Show More</StyledButton>
    </>
  );
}
