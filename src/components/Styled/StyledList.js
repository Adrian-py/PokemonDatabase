import styled from "styled-components";

const StyledList = styled.div`
  width: 100%;
  margin-bottom: 8vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16vw, 1fr));
  grid-auto-rows: 18vh;

  @media only screen and (max-width: 48em) {
    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
    grid-auto-rows: 14vh;
  }

  @media only screen and (max-width: 25.875em) {
    grid-template-columns: repeat(auto-fit, minmax(32vw, 1fr));
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 1.5vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: rgba(var(--blue));
  background: rgba(var(--yellow));
  border: 6px solid rgba(var(--blue));
  border-radius: 20px;
  transition: transform 150ms ease-in-out;
  cursor: pointer;

  @media only screen and (max-width: 48em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 25.875em) {
    font-size: 1.25rem;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    transform: scale(1.01);
  }
`;

const StyledPokemon = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: capitalize;
  transition: all 150ms ease-in-out;
  cursor: pointer;

  @media only screen and (max-width: 80em) {
    font-size: 1rem;

    & img {
      width: 4rem;
    }
  }

  @media only screen and (max-width: 25.875em) {
    & img {
      width: 3rem;
    }
  }

  &:hover {
    background: rgba(var(--dark), 0.1);
    transform: scale(1.15);
  }
`;

export { StyledButton, StyledList, StyledPokemon };
