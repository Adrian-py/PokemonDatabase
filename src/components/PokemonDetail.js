import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import backArrow from "../assets/back-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

import {
  StyledBackButton,
  StyledPokemonHeader,
  StyledPokemonStats,
  StyledPokemonStat,
  StyledPokemonEvolutions,
} from "./Styled/StyledPokemonDetails";

export default function PokemonDetail({
  getPokemonDetail,
  getPokemonEvolutionChain,
}) {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [popkemonEvolutions, setPokemonEvolutions] = useState([]);
  const [isRetrievingDetails, setIsRetrievingDetails] = useState(true);

  const navigatePage = useNavigate();

  // Save pokemon types
  const handlePokemonTypes = (types) => {
    let pokemonTypes = [];
    types.forEach((type) => {
      pokemonTypes.push(type.type.name);
    });
    setPokemonTypes(pokemonTypes);
  };

  const handleGetEvolutionsData = async (evolutions) => {
    const evolutionsImageURL = Promise.all(
      evolutions.map(async (evolution) => {
        const response = await getPokemonDetail(evolution);
        return await response.data.sprites.front_default;
      })
    );

    return evolutionsImageURL.then((res) => {
      return res.map((evolution, ind) => {
        return { name: evolutions[ind], imageURL: evolution };
      });
    });
  };

  useEffect(() => {
    // Retrieve pokemon data
    getPokemonDetail(pokemonName).then((res) => {
      setPokemonData(res.data);
      handlePokemonTypes(res.data.types);
      console.log(res.data.stats);
    });

    // Retrieve pokemon evolutions
    getPokemonEvolutionChain(pokemonName)
      // Retrieve images and names of each evolution
      .then(async (evolutions) => {
        return handleGetEvolutionsData(evolutions);
      })
      .then((res) => {
        setPokemonEvolutions(res);
        setIsRetrievingDetails(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  return (
    <>
      <StyledBackButton onClick={() => navigatePage("/")}>
        <img src={backArrow} alt="" />
        <p>Back to list</p>
      </StyledBackButton>

      {isRetrievingDetails ? null : (
        <>
          <StyledPokemonHeader>
            <div className="pokemon-detail">
              <img
                src={
                  pokemonData.sprites.front_default === null
                    ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png"
                    : pokemonData.sprites.front_default
                }
                alt="Pokemon Illustration"
                className="pokemon-detail__image"
              />
              <div className="pokemon-detail__desc">
                <div className="pokemon-detail__header">
                  <h2 className="pokemon-detail__name">{pokemonData.name}</h2>
                  <span className="pokemon-detail__id">#{pokemonData.id}</span>
                </div>

                <div className="pokemon-detail__types">
                  {pokemonTypes.map((type) => {
                    return (
                      <div className="pokemon-detail__type" key={type}>
                        <img
                          src={`/images/PokemonType${type}.svg`}
                          alt="Pokemon Type"
                        />
                        <p>{type}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </StyledPokemonHeader>

          <StyledPokemonStats>
            <h2>Stats</h2>

            {pokemonData.stats.map((stat) => {
              return (
                <StyledPokemonStat type={stat.stat.name} num={stat.base_stat}>
                  <p>{stat.stat.name}</p>

                  <div className="stat">
                    <p className="stat__num">{stat.base_stat}</p>
                    <div className="stat__bar">
                      <div className="stat__fill"></div>
                    </div>
                  </div>
                </StyledPokemonStat>
              );
            })}
          </StyledPokemonStats>

          <StyledPokemonEvolutions>
            <h2>Evolutions</h2>

            <div className="evolution-chain">
              {popkemonEvolutions.map((evolution, ind, arr) => {
                return (
                  <div className="evolution" key={evolution.name}>
                    <div
                      className="evolution__desc"
                      onClick={() => {
                        navigatePage(`/pokemon/${evolution.name}`);
                      }}
                    >
                      <img
                        src={evolution.imageURL}
                        alt={`${evolution.name} Illustration`}
                        className="evolution__img"
                      />
                      <p className="evolution__name">{evolution.name}</p>
                    </div>
                    {ind < arr.length - 1 ? (
                      <img src={rightArrow} alt="" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </StyledPokemonEvolutions>
        </>
      )}
    </>
  );
}
