import React, { useState, useEffect, Fragment } from "react";
import { getPokemon, getAllPokemon } from "./services/pokemon";
import Pokedex from "./components/pokedex";
import "./App.css";

export function App({ str }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";
  const [PokemonCount, setCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  const PreviousPokemon = () => {
    if (PokemonCount === 1) {
      setCount(pokemonData.length);
    } else {
      setCount(PokemonCount - 1);
    }
  };

  const NextPokemon = () => {
    if (PokemonCount === pokemonData.length) {
      setCount(1);
    } else {
      setCount(PokemonCount + 1);
    }
  };

  const filterData = pokemonData.filter(pokemon => {
    const filterPokemon = new RegExp(str,'i')
      
    return str ? pokemon.name.match(filterPokemon) : pokemon.id === PokemonCount;
  });

  return (
    <>
      <Fragment>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <>
              <div className="title">
              {str.length === 0 && (
                  <div>Code Challenge - Blue Squad </div>
                  )}
              
              <div />

              {filterData.length > 0 && str.length > 0 && (
                <p> we found {filterData.length} results.</p>
              )}
            </div>

         

            <div className="grid-container">
              {filterData.map((pokemon, i) => {
                return <Pokedex key={i} pokemon={pokemon} />;
              })}
              {filterData.length === 0 && (
                <h1 className="nofound">No pokemons were found with the name  '{str}'</h1>
              )}
              </div>
              {str.length === 0 && (
              <div className="buttonsClick">
                <button   onClick={() => PreviousPokemon()}>Previous</button>
                <button  onClick={() => NextPokemon()}>Next</button>
              </div>
            )}
          </>
        )}
      </Fragment>
    </>
  );
}

export default App;
