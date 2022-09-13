import axios from "axios";

export default class API {
  getPokemonDetail = (pokemon) => {
    return axios.request({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    });
  };

  getPokemonEvolutionChain = async (pokemonID) => {
    return await axios
      .request({
        url: `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`,
      })
      .then((res) => {
        return axios.request({
          method: "GET",
          url: res.data.evolution_chain.url,
        });
      })
      // Retrieve names of each evolution
      .then((res) => {
        let nextEvolution = res.data.chain,
          evolutions = [];

        while (nextEvolution) {
          evolutions.push(nextEvolution.species.name);
          nextEvolution = nextEvolution.evolves_to[0];
        }

        return evolutions;
      });
  };

  getPokemonPage = (pageURL) => {
    return axios.request({ method: "GET", url: pageURL });
  };
}
