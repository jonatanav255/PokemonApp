import React from "react";

import "./style.css";
/**
 * This function returns the information of the pokemon
 */
function Pokedex({ pokemon }) {
    return (
        <div className="Pokedex">
            <div>
                <div className="Pokeimg">
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>

                <div className="Pokeinfoblock">
                    <div className="Pokenumber">
                        <h2>#{pokemon.id}</h2>
                    </div>

                    <div className="Pokeinfo">
                        <div className="Pokeinfo">Name: {pokemon.name}</div>
                        <div className="Pokeinfo">Height: {pokemon.height}</div>
                        <div className="Pokeinfo">Weight: {pokemon.weight}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pokedex;
