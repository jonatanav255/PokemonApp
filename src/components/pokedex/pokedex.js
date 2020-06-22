import React from 'react';
import typeColors from '../../helpers/helper'
import './style.css';

function Card({ pokemon }) {
    return (
        <div class="containerPoke">
            <div className="Pokedex">
                <div>
                    <div className="Pokeimg">
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                    <div className="arrowsec">
                        <p>hola</p>
                    </div>
                    <div className="mytest">

                        <div className="Pokenumber">
                            <h2>#{pokemon.id}</h2>
                        </div>

                        <div className="Pokeinfo">
                            Name: {pokemon.name}
                        </div>

                        <div className="Pokeinfo">
                            <div className="Pokedata">
                                <p className="title">Height: {pokemon.height}m </p>

                            </div>
                            <div className="Pokedata">
                                <p className="title">Weight: {pokemon.weight}</p>

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Card;