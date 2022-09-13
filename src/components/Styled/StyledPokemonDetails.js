import styled from "styled-components";

/* Table of Contents */
// 1. Pokemon Stat Colors
// 2. StyledBackButton
// 3. StyledPokemonHeader
// 4. StyledPokemonStats
// 5. StyledPokemonStat
// 6. StyledPokemonEvolution

const statColors = {
  hp: "green",
  attack: "red",
  defense: "brown",
  "special-attack": "darkRed",
  "special-defense": "#654321",
  speed: "blue",
};

const StyledBackButton = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 1vw;
  cursor: pointer;

  & img {
    height: 2rem;
    aspect-ratio: 1/1;
  }

  & p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 25.875em) {
    & img {
      height: 1.5rem;
    }

    & p {
      font-size: 1.25rem;
    }
  }
`;

const StyledPokemonHeader = styled.div`
  width: 100%;
  padding: 4vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(var(--dark));

  @media only screen and (max-width: 80em) {
    padding: 6vh 0 2vh 0;
  }

  .pokemon-detail {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5vw;

    &__image {
      width: 25%;
      aspect-ratio: 1/1;
      background: rgba(var(--light), 0.25);
      border-radius: 50%;

      @media only screen and (max-width: 25.875em) {
        min-width: 12.5%;
      }
    }

    &__desc {
      max-width: 65%;
      padding: 4vh 0;

      @media only screen and (max-width: 48em) {
        padding: 0;
      }
    }

    &__header {
      display: flex;
      align-items: center;
      gap: 2.5vw;
    }

    &__name {
      display: inline-block;
      font-size: 4rem;
      text-transform: capitalize;
      letter-spacing: 10px;

      @media only screen and (max-width: 80em) {
        font-size: 3.25rem;
      }

      @media only screen and (max-width: 25.875em) {
        font-size: 1.15rem;
      }
    }

    &__id {
      font-family: "Pokemon";
      font-size: 2.5rem;
      color: rgba(var(--yellow));
      -webkit-text-stroke: 2px rgba(var(--blue));

      @media only screen and (max-width: 25.875em) {
        font-size: 1rem;
        -webkit-text-stroke: 1px rgba(var(--blue));
      }
    }

    &__types {
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 2vw;
    }

    &__type {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1vh;
      font-weight: bold;
      text-transform: capitalize;

      @media only screen and (max-width: 25.875em) {
        font-size: 0.75rem;
      }

      & img {
        height: 3vw;
        aspect-ratio: 1/1;

        @media only screen and (max-width: 48em) {
          height: 6vw;
        }
      }
    }
  }
`;

const StyledPokemonStats = styled.div`
  width: 100%;
  padding: 4vh 0;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1vh;
    font-family: "Pokemon";
    font-size: 2rem;
    font-weight: 200;

    @media only screen and (max-width: 25.875em) {
      font-size: 1.25rem;
    }
  }

  @media only screen and (max-width: 48em) {
    gap: 1vh;
  }
`;

const StyledPokemonStat = styled.div`
  width: 60%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: capitalize;
  color: ${(props) => statColors[props.type]};

  @media only screen and (max-width: 80em) {
    height: 2.25rem;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 48em) {
    width: 100%;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 25.875em) {
    height: 2rem;
    font-size: 1rem;
  }

  & .stat {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2vw;

    &__bar {
      width: 20vw;
      height: 80%;
      display: flex;
      justify-content: flex-start;
      background: rgba(var(--light));
      border: 4px solid rgba(var(--blue));
      border-radius: 10px;

      @media only screen and (max-width: 48em) {
        width: 40vw;
      }

      @media only screen and (max-width: 25.875em) {
        width: 36vw;
      }
    }

    &__fill {
      width: ${(props) => `${props.num / 2}%`};
      height: 100%;
      background: rgba(var(--yellow));
      border-radius: 6px;
    }
  }
`;

const StyledPokemonEvolutions = styled.div`
  width: 100%;
  padding: 4vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-family: "Pokemon";
    font-size: 2rem;
    font-weight: 200;

    @media only screen and (max-width: 25.875em) {
      font-size: 1.25rem;
    }
  }

  .evolution-chain {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4vw;
  }

  .evolution {
    display: flex;
    gap: 4vw;

    &__desc {
      padding: 1vh 1vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 10px;
      transition: all 250ms ease-in-out;
      cursor: pointer;

      &:hover {
        background: rgba(var(--dark), 0.1);
      }
    }

    &__img {
      width: 8vw;

      @media only screen and (max-width: 25.875em) {
        width: 12vw;
      }
    }

    &__name {
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: capitalize;

      @media only screen and (max-width: 25.875em) {
        font-size: 1rem;
      }
    }
  }
`;

export {
  StyledBackButton,
  StyledPokemonHeader,
  StyledPokemonStats,
  StyledPokemonStat,
  StyledPokemonEvolutions,
};
