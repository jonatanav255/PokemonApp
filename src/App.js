import React, { useState, useEffect, Fragment } from 'react';

import Card from './components/pokedex/pokedex';
import { getPokemon, getAllPokemon } from './services/pokemon';
import './App.css';


export function App({ str }) {
  const [pokemonData, setPokemonData] = useState([])

  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
  const [PokemonCount, setCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])



  /**
   * @description
   * @returns  
   * @param data
   */

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }
  const PreviousPokemon = () => {
    console.log('nofun')
    if (PokemonCount === 1) {
      setCount(pokemonData.length);
    } else {
      setCount(PokemonCount - 1)
    }

  }

  /**
   * @description
   * @returns  
   */
  const NextPokemon = () => {
    console.log('nofun')
    if (PokemonCount === pokemonData.length) {
      setCount(1);
    } else {
      setCount(PokemonCount + 1)
    }

  }


  const filterData = (pokemonData.filter((pokemon) => {
    /* return pokemon.id === PokemonCount;*/
    console.log('este es el string: ', str)
    const re = new RegExp(str, 'g');

    return str ? pokemon.name.match(re)
      : pokemon.id === PokemonCount;

  }))



  return (
    <>


      <Fragment>

        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div className="btn">

              <div>Code Challenge - Blue Squad</div>
              {
                filterData.length > 0 && str.length > 0 &&
                <div><p>we found {filterData.length} results.</p></div>
              }

              {

                str.length == 0 &&
                <div>
                  <button onClick={() => PreviousPokemon()}>
                    -</button>
                  <button onClick={() => NextPokemon()}

                  >
                    +</button>
                </div>
              }

            </div>
            <div className="grid-container">

              {filterData.map((pokemon, i) => {

                return <Card key={i} pokemon={pokemon} />


              })}
              {filterData.length === 0 &&
                <h1>No pokemons were found with a name like '{str}'</h1>
              }
            </div>

          </>
        )}
      </Fragment>
    </>
  );
}

export default App;
