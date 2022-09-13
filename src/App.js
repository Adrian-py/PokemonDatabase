import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import List from "./components/List";
import PokemonDetail from "./components/PokemonDetail";
import { Global } from "./components/Global";

import API from "./Api";

const StyledApp = styled.div`
  width: 100%;
  padding: 0 6vw;

  @media only screen and (max-width: 48em) {
    padding: 0;
  }
`;

const StyledContainer = styled.div`
  min-height: 100vh;
  padding: 4vh 6vw;
  background: rgba(var(--white), 0.5);

  @media only screen and (max-width: 80em) {
    padding: 4vh 4vw;
  }

  @media only screen and (max-width: 48em) {
    padding: 4vh 6vw;
  }
`;

function App() {
  const api = new API();
  const [pokemonList, setPokemonList] = useState([]);
  const [pageURL, setPageURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [isRetrievingData, setIsRetrievingData] = useState(true);

  const handleGetNextPage = () => {
    api.getPokemonPage(pageURL).then((res) => {
      res.data.results.forEach((pokemon) => {
        api
          .getPokemonDetail(pokemon.name)
          .then((res) => setPokemonList((prev) => [...prev, res.data]));
      });
      setIsRetrievingData(false);
      setPageURL(res.data.next);
    });
  };

  useEffect(() => {
    handleGetNextPage();
    pokemonList.sort((a, b) => {
      return a.id - b.id;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <StyledApp>
        <Global />
        <StyledContainer>
          <Header />

          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <List
                    isRetrievingData={isRetrievingData}
                    pokemonList={pokemonList}
                    handleGetNextPage={handleGetNextPage}
                  />
                }
              />
              <Route
                path="/pokemon/:pokemonName"
                element={
                  <PokemonDetail
                    getPokemonDetail={api.getPokemonDetail}
                    getPokemonEvolutionChain={api.getPokemonEvolutionChain}
                  />
                }
              />
            </Routes>
          </main>
        </StyledContainer>
      </StyledApp>
    </Router>
  );
}

export default App;
