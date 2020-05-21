import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props) {
  const pokemonMap = props.caughtPokemon.map((element) => 
    <Pokemon
    key={pokemon.id} 
    saveName={props.saveName}
    releasePokemon={props.releasePokemon}/>)
  return (
  <div>
    <h2>Pokedex.js</h2>
    
 
    </div>
  )
}

export default Pokedex